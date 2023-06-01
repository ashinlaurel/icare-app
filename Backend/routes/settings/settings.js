const express = require("express");
const {
  getReportsEmail,
  setReportsEmail,
} = require("../../controllers/settings/settings");
const {
  isSignedIn,
  isAuthenticated,
  getEmpById,
} = require("../../controllers/employee/EmployeeAuth");

const router = express.Router();

router.param("id", getEmpById);

//Admin Email settings routes
router.get(
  "/:id/getReportsEmails",
  isSignedIn,
  isAuthenticated,
  getReportsEmail
);
router.post(
  "/:id/setReportsEmails",
  isSignedIn,
  isAuthenticated,
  setReportsEmail
);

module.exports = router;
