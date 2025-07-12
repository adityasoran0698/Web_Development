const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  GetUsersById,
  UpdateUserById,
  DeleteUserById,
  CreateUser,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(CreateUser);

router
  .route("/:id")
  .get(GetUsersById)
  .patch(UpdateUserById)
  .delete(DeleteUserById);
module.exports = router;
