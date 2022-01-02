const express = require("express");

const {auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

const validateMiddleware = validation(joiSchema);

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", auth, validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.put("/:id", validateMiddleware, ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite",  ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
