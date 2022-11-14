//package imports
const express = require("express");
const router = express.Router();

//custom module imports
const { post, edit } = require("../controller/user")

//routes
router.route("/post").post(post);
router.route("/edit/:id").put(edit);

//export
module.exports = router