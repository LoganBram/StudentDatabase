//store business logic related to each route
const pool = require("../db");
const queries = require("./queries");

const addStudent = (req, res) => {
  //pull data from request
  const { name, email, age, dob } = req.body;
  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists");
    }
    //add student to db if email doesnt exist
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("student created successfully");
      }
    );
  });
};

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

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
};
