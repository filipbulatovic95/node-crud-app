const ScheduledSlot = require("../models/scheduledSlot.model");

const postScheduleSlot = async (req, res) => {
  try {
    const slot = await ScheduledSlot.create(req.body);
    res.status(200).json(slot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllScheduledSlots = async (req, res) => {
  try {
    const slots = await ScheduledSlot.find({});
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postScheduleSlot,
  getAllScheduledSlots,
};
