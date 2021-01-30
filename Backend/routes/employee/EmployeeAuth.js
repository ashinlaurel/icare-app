const express = require("express");
const {
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
  getAllEmpData,
  createSalary,
  getAllSalary,
  deleteSalary,
  getSalById,
  downloadsalaryPdf,
  getAllEmpCalls
  
} = require("../../controllers/employee/Employee");
const {
  signup,
  signin,
  isSignedIn,
  getEmpById,
  isAdmin,
  getAllEngg,
} = require("../../controllers/employee/EmployeeAuth");
const { isAuthenticated } = require("../../controllers/employee/EmployeeAuth");
const router = express.Router();
////GET USER FROM PARAMS
router.param("id", getEmpById);
// router.post("/signup",signup);
// router.post("/signup",signup);
router.get("/logout", (req, res) => {
  return res.send("LOGOUT");
});
//---Get By ID Details
router.post("/:id/getEmployeeById", getEmployeeById);
router.post("/getEmployeeById", getEmployeeById);
// get employees with search enabled and filters
router.post("/employees", getAllEmployees);
router.post("/:id/getAll", getAllEngg);
//test route
router.post("/signInTest/:id", isSignedIn, isAuthenticated, (req, res) => {
  // console.log("Authenticated Successfull", req.emp);
  // console.log("Authenticated Successfull");
  res.json({
    user: {
      email: req.emp.email,
      role: req.emp.role,
    },
  });
});
// getting all employees data
router.post("/:id/getAllEmpData", getAllEmpData);
router.post("/:id/getAllEmpCalls", isSignedIn, isAuthenticated, getAllEmpCalls);

router.post("/signup", signup);
router.post("/:id/signup", signup);
router.post("/signin", signin);

router.post(
  "/isadmintest/:id",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  (req, res) => {
    console.log("Admin Account", req.auth);
    res.json({ user: req.auth });
  }
);

// -----------Updation and Deletion Routes ------
router.post("/:id/update", isSignedIn, isAuthenticated, updateEmployee);
router.post("/:id/deleteEmployee", isSignedIn, isAuthenticated, deleteEmployee);

// -----------Salary Routes ----------
router.post("/:id/createSalary", createSalary);
router.post("/:id/getAllSalary", getAllSalary);
router.post("/:id/deleteSalary", isSignedIn, isAuthenticated, deleteSalary);
router.post("/getsalarybyid", getSalById);
router.post("/:id/downloadsalarypdf", isSignedIn, isAuthenticated, downloadsalaryPdf)

module.exports = router;
