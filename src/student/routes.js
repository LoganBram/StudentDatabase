//store student routes

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("using api routing");
});

module.exports = router;
