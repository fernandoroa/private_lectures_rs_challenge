const fs = require("fs");
const data = require("./data.json");

const { age, date, graduation, parse_lecture_type } = require("./utils");

// show
exports.show = function (req, res) {
  const { id } = req.params;

  const foundTeacher = data.teachers.find(function (teacher) {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send("Teacher not found");

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    education_level: graduation(foundTeacher.education_level),
    lecture_type: parse_lecture_type(foundTeacher.lecture_type),
    subjects_taught: foundTeacher.subjects_taught.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(
      foundTeacher.created_at
    ),
  };
  return res.render("teachers/show", { teacher });
};

// post
exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") return res.send("please fill all fields");
  }

  const id = Number(data.teachers.length + 1);

  let {
    avatar_url,
    birth,
    name,
    education_level,
    lecture_type,
    subjects_taught,
  } = req.body;

  const created_at = Date.now();
  birth = Date.parse(birth);

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    education_level,
    lecture_type,
    subjects_taught,
    created_at,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error!");

    return res.redirect("/teachers");
  });
};

// edit
exports.edit = function (req, res) {
  const { id } = req.params;

  const foundTeacher = data.teachers.find(function (teacher) {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send("teacher not found");

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth),
  };

  return res.render("teachers/edit", { teacher });
};

// put
exports.put = function (req, res) {
  let { id } = req.body;

  let index = 0;

  const foundTeacher = data.teachers.find(function (teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundTeacher) return res.send("Teacher not found");

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(id),
  };

  data.teachers[index] = teacher;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error!");

    return res.redirect(`/teachers/${id}`);
  });
};

// delete
exports.delete = function (req, res) {
  let { id } = req.body;

  const filteredTeachers = data.teachers.filter(function (teacher) {
    return teacher.id != id;
  });

  data.teachers = filteredTeachers;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error");

    return res.redirect("/teachers");
  });
};
