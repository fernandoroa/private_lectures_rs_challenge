const { date } = require("../../lib/utils");
const db = require("../../config/db");

module.exports = {
  // index
  all(callback) {
    db.query(
      `SELECT * 
    FROM teachers
    ORDER BY name ASC`,
      function (err, results) {
        if (err) throw `Database error! ${err}`;
        callback(results.rows);
      }
    );
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

    db.query(query, values, function (err, results) {
      if (err) throw `Database error! ${err}`;
      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(
      `
      SELECT * 
      FROM teachers 
      WHERE id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database error! ${err}`;
        callback(results.rows[0]);
      }
    );
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

    db.query(query, values, function (err, results) {
      if (err) throw `Database error! ${err}`;
      callback();
    });
  },
  delete(id, callback) {
    db.query(
      `DELETE FROM teachers WHERE id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database error! ${err}`;
        return callback();
      }
    );
  },
};
