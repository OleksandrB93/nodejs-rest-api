const express = require("express");
const router = express.Router();

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { contactsSchema, updateSchema, statusSchema } = require("../../schemas");

const validateMiddleware = validation(contactsSchema);
const updateValidateMiddleware = validation(updateSchema);
const updateFavoriteMiddleware = validation(statusSchema);

const { contacts: ctrl } = require("../../controlers");

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:contactId", auth, ctrlWrapper(ctrl.deleteById));

router.put(
  "/:contactId",
  auth,
  updateValidateMiddleware,
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  auth,
  updateFavoriteMiddleware,
  ctrlWrapper(ctrl.updateStatus)
);

module.exports = router;
