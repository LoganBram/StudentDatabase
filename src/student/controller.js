//store business logic related to each route
const pool = require("../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getAllStudents, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  //take id sent by routes in request
  const id = parseInt(req.params.id);
  //use id to select student with that ID
  pool.query(queries.studentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
};
