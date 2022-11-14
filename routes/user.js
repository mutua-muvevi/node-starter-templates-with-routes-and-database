//package imports
const express = require("express");
const router = express.Router();

//custom module imports
const { post, editById, fetchAll, fetchOne } = require("../controller/user");

//routes
router.route("/post").post(post);
router.route("/edit/:id").put(editById);
router.route("/get/all").get(fetchAll);
router.route("/get/one/:id").get(fetchOne)

//export
module.exports = router