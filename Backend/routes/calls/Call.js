const express = require("express");
const { getEmpById } = require("../../controllers/employee/EmployeeAuth");
const {
  callCreate,
  getCalls,
  assignEnggToCall,
  getCallById,
  swapItems,
  countCallsByDate,
} = require("../../controllers/calls/calls");

const router = express.Router();

router.param("id", getEmpById);

// router.post("/:id/create", , isAuthenticated, unitCreate);
router.post("/:id/create", callCreate);
router.post("/:cid/customercreate", callCreate);
router.post("/:id/getAll", getCalls);
router.post("/:cid/customergetAll", getCalls);
router.post("/:id/assignEngg", assignEnggToCall);
router.post("/:id/getbyId", getCallById);
router.post("/:id/swapitems", swapItems);
// router.post("/:id/update", updateCall);
//---- counters -----
router.post("/:id/callsbydate", countCallsByDate);
router.post("/custcallsbydate", countCallsByDate);

module.exports = router;
