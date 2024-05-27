const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategoryWithId,
  updateCategoryWithId,
  deleteCategoryWithId,
} = require("../controllers/category.controllers");
const auth = require("../middlewares/auth.middlewares");

const router = express.Router();

router.route("/").post(auth, createCategory).get(auth, getAllCategories);

router
  .route("/:id")
  .get(auth, getCategoryWithId)
  .put(auth, updateCategoryWithId)
  .patch(auth, updateCategoryWithId)
  .delete(auth, deleteCategoryWithId);

module.exports = router;
