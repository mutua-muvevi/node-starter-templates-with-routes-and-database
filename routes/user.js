//package imports
const express = require("express");
const router = express.Router();

//custom module imports
const { post } = require("../controller/user")

//routes
router.route("/post").post(post);

//export
module.exports = router