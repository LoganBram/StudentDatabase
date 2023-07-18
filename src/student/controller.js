//store business logic related to each route
const pool = require("../db");
const queries = require("./queries");

const addStudent = (req, res) => {
  //use when json sent in the post request
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

const deleteStudentById = (req, res) => {
  //use when pulling id from url
  const id = parseInt(req.params.id);
  //check if student exists
  pool.query(queries.studentById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("Student does not exist");
    }
  });

  //delete student
  pool.query(queries.deleteStudentQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send(`student deleted with ID: ${id}`);
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudentById,
};
