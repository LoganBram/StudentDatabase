//store student routes

const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/", controller.addStudent);
router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);

module.exports = router;
