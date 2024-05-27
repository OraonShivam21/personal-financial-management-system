const express = require("express");
const {
  getExpenseOrIncomeReport,
  getCategoryReport,
  getAllMonthlyReport,
} = require("../controllers/monthlyReport.controllers");

const router = express.Router();

router.route("/type/:type").get(auth, getExpenseOrIncomeReport);

router.route("/category/:category").get(auth, getCategoryReport);

router.route("/all-report").get(auth, getAllMonthlyReport);

module.exports = router;
