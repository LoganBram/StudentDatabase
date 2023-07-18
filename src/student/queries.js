//holds sql queries against db

const getAllStudents = "SELECT * FROM students";
const studentById = "SELECT * FROM students WHERE id = $1";

module.exports = {
  getAllStudents,
  studentById,
};
