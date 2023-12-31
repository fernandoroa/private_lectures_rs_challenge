const { date } = require("../../lib/utils");
const { db } = require("../../config/db");

module.exports = {
  // index
  paginate(params) {
    const { filter, limit, offset, callback } = params;

    let query = "",
      filterQuery = "",
      totalQueryOrig = totalQuery = `(
          SELECT count(*) FROM students
          )`;

    if (filter) {
      filterQuery = `
      WHERE students.name ILIKE '%${filter}%'
      OR students.email ILIKE '%${filter}%'
      `;
      totalQuery = `(
        SELECT count(*) FROM students 
        ${filterQuery}
      )`;
    }

    query = `
    create or replace function get_all_data_if_filter_returns_nothing_students()
      returns table(id int, avatar_url text, name text, email text, school_year text, hour_intensity int, birth timestamp,
        teacher_id int, total bigint)
    language plpgsql
    as
    $_$
    declare
    begin
      RETURN QUERY
      SELECT students.*, ${totalQuery} AS total
      FROM students
      ${filterQuery}
      ORDER BY students.name
      LIMIT $1 OFFSET $2;

      IF FOUND THEN return; end if;

      RETURN QUERY
      SELECT students.*, ${totalQueryOrig} AS total
      FROM students
      ORDER BY students.name
      LIMIT $1 OFFSET $2;

    end;
    $_$;

    select * from get_all_data_if_filter_returns_nothing_students();
    `;

    db.multi(query, [limit, offset])
      .then(result => {
        callback(result[1]);
      })
      .catch(error => {
        console.log("error:", error);
      });
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
      +data.hour_intensity,
      date(data.birth).iso,
      data.teacher,
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
      SELECT students.*, teachers.name AS teacher_name 
      FROM students 
      LEFT JOIN teachers ON (students.teacher_id = teachers.id)
      WHERE students.id = $1`;

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
      +data.hour_intensity,
      date(data.birth).iso,
      data.teacher,
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
    db.any(`DELETE FROM students WHERE id = $1`, [id])
      .then(() => {
        callback();
      })
      .catch(error => {
        console.log("error:", error);
      });
  },
  teachersSelectOptions(callback) {
    db.any(`SELECT name, id FROM teachers`)
      .then(result => {
        callback(result);
      })
      .catch(error => {
        console.log("error:", error);
      });
  },
};
