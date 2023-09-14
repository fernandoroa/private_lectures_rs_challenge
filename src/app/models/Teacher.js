const { date } = require("../../lib/utils");
const { db } = require("../../config/db");

module.exports = {
  // index
  paginate(params) {
    const { filter, limit, offset, callback } = params;

    let query = "",
      filterQuery = "",
      totalQuery = `(
          SELECT count(*) FROM teachers
          )`;

    if (filter) {
      filterQuery = `
      WHERE teachers.name ILIKE '%${filter}%'
      OR teachers.subjects_taught ILIKE '%${filter}%'
      `;
      totalQuery = `(
        SELECT count(*) FROM teachers 
        ${filterQuery}        
      )`;
    }

    query = `
    SELECT teachers.*, ${totalQuery} AS total, count(students) AS total_students
    FROM teachers
    LEFT JOIN students ON (teachers.id = students.teacher_id)
    ${filterQuery}
    GROUP BY teachers.id ORDER BY teachers.name LIMIT $1 OFFSET $2
    
    `;

    db.query(query, [limit, offset], function (err, results) {
      if (err) throw `Database error! ${err}`;
      callback(results.rows);
    });
  },
  // post
  create(data, callback) {
    const query = `
      INSERT INTO teachers (
        name,
        avatar_url,
        birth,
        education_level,
        lecture_type,
        subjects_taught,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      data.name,
      data.avatar_url,
      date(data.birth).iso,
      data.education_level,
      data.lecture_type,
      data.subjects_taught,
      date(Date.now()).iso,
    ];

    db.any(query, values)
      .then(result => {
        callback(result[0]);
      })
      .catch(error => {
        console.log("error:", error);
      });
  },
  find(id, callback) {
    let query = `
      SELECT *
      FROM teachers
      WHERE id = $1`;

    db.any(query, [+id])
      .then(result => {
        callback(result[0]);
      })
      .catch(error => {
        console.log("error:", error);
      });
  },
  update(data, callback) {
    const query = `
      UPDATE teachers
      SET 
      avatar_url=($1),
      name=($2),
      birth=($3),
      education_level=($4),
      lecture_type=($5),
      subjects_taught=($6)
      WHERE id = $7
    `;

    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      data.education_level,
      data.lecture_type,
      data.subjects_taught,
      data.id,
    ];

    db.any(query, values)
      .then(() => {
        callback();
      })
      .catch(error => {
        console.log("error:", error);
      });
  },
  delete(id, callback) {
    db.any(`DELETE FROM teachers WHERE id = $1`, [id])
      .then(() => {
        callback();
      })
      .catch(error => {
        console.log("error:", error);
      });
  },
};
