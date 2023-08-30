module.exports = {
  age: function (timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month == 0 && today.getDate() <= birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  },
  graduation: function (graduation_selected) {
    const graduation_object = {
      ensino_medio_completo: "Ensino Médio Completo",
      ensino_superior_completo: "Ensino Superior Completo",
      mestrado: "Mestrado",
      doutorado: "Doutorado",
    };
    return graduation_object[graduation_selected];
  },
  parse_lecture_type: function (lecture_type) {
    const lecture_object = {
      present: "Presencial",
      distance: "À distância",
    };
    return lecture_object[lecture_type];
  },
  date: function (timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(
      -2
    );
    const day = `0${date.getUTCDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
  },
};
