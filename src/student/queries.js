//holds sql queries against db

const getAllStudents = "SELECT * FROM students";
const studentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

module.exports = {
  getAllStudents,
  studentById,
  checkEmailExists,
};
