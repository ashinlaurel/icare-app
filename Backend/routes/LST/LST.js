const express = require("express");

const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");
const {
  LSTCreate,
  getAllItems,
  updateLST,
  downloadPdf,
  getById,
  deleteLST,
  countLSTByDate,
} = require("../../controllers/LST/LST");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, LSTCreate);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllItems);

router.post("/getall", getAllItems);

router.post("/getbyid", getById);
router.post("/:id/getbyid", getById);

router.post("/:id/update", isSignedIn, isAuthenticated, updateLST);
router.post("/:id/delete", isSignedIn, isAuthenticated, deleteLST);

router.post("/:id/downloadpdf", isSignedIn, isAuthenticated, downloadPdf);

router.post("/:id/lstbydate", countLSTByDate);

module.exports = router;
