const {
  postScheduleSlot,
  getAllScheduledSlots,
} = require("../controllers/scheduleController");

const ScheduledSlot = require("../models/scheduledSlot.model.js");
const express = require("express");

const router = express.Router();

router.post("/", postScheduleSlot);

router.get("/", getAllScheduledSlots);

module.exports = router;
