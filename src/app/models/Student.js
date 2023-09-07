const { date } = require("../../lib/utils");
const db = require("../../config/db");

module.exports = {
  // index
  all(callback) {
    db.query(
      `SELECT * 
    FROM students
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
      INSERT INTO students (
        avatar_url,
        name,
        email,
        school_year,
        hour_intensity,
        birth,
        teacher_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      data.avatar_url,
      data.name,
      data.email,
      data.school_year,
      data.hour_intensity,
      date(data.birth).iso,
      data.teacher,
    ];

    db.query(query, values, function (err, results) {
      if (err) throw `Database error! ${err}`;
      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(
      `
      SELECT students.*, teachers.name AS teacher_name 
      FROM students 
      LEFT JOIN teachers ON (students.teacher_id = teachers.id)
      WHERE students.id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database error! ${err}`;
        callback(results.rows[0]);
      }
    );
  },
  update(data, callback) {
    const query = `
      UPDATE students
      SET 
      avatar_url=($1),
      name=($2),
      email=($3),
      school_year=($4),
      hour_intensity=($5),
      birth=($6),
      teacher_id=($7)
      WHERE id = $8
    `;

    const values = [
      data.avatar_url,
      data.name,
      data.email,
      data.school_year,
      data.hour_intensity,
      date(data.birth).iso,
      data.teacher,
      data.id,
    ];

    db.query(query, values, function (err, results) {
      if (err) throw `Database error! ${err}`;
      callback();
    });
  },
  delete(id, callback) {
    db.query(
      `DELETE FROM students WHERE id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database error! ${err}`;
        return callback();
      }
    );
  },
  teachersSelectOptions(callback) {
    db.query(`SELECT name, id FROM teachers`, function (err, results) {
      if (err) throw `Database error! ${err}`;
      callback(results.rows);
    });
  },
};
