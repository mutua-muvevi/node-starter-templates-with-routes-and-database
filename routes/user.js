//package imports
const express = require("express");
const router = express.Router();

//custom module imports
const { post, editById, fetchAll, fetchOne, deleteUser } = require("../controller/user");

//routes
// create
router.route("/post").post(post);

//update
router.route("/edit/:id").put(editById);

//read
router.route("/get/all").get(fetchAll);
router.route("/get/one/:id").get(fetchOne)

//delete user
router.route("/delete/:id").delete(deleteUser)

//export
module.exports = router