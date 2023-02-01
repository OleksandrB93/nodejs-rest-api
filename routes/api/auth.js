const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { auth: ctrl } = require("../../controlers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
