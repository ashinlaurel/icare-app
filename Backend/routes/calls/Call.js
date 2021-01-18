const express = require("express");
const { getEmpById } = require("../../controllers/employee/EmployeeAuth");
const {
  callCreate,
  getCalls,
  assignEnggToCall,
  getCallById,
  swapItems,
} = require("../../controllers/calls/calls");

const router = express.Router();

router.param("id", getEmpById);

// router.post("/:id/create", , isAuthenticated, unitCreate);
router.post("/:id/create", callCreate);
router.post("/:id/getAll", getCalls);
router.post("/:id/assignEngg", assignEnggToCall);
router.post("/:id/getbyId", getCallById);
router.post("/:id/swapitems", swapItems);

module.exports = router;
