//holds sql queries against db

const getAllStudents = "SELECT * FROM students";
const studentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent =
  "INSERT INTO students (name,email,age,dob) VALUES ($1, $2, $3, $4)";

module.exports = {
  getAllStudents,
  studentById,
  checkEmailExists,
  addStudent,
};
