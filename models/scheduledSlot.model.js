const mongoose = require("mongoose");

const ScheduledSlotSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter a valid username"],
    },

    firstName: {
      type: String,
      required: [true, "Please enter a valid first name"],
    },

    lastName: {
      type: String,
      required: [true, "Please enter a valid last name"],
    },

    startSlot: {
      type: Date,
      required: [true, "Please enter a valid start date"],
    },

    endSlot: {
      type: Date,
      required: [true, "Please enter a valid end date"],
    },
  },
  {
    timestamps: true,
  }
);

const ScheduledSlot = mongoose.model("ScheduledSlot", ScheduledSlotSchema);

module.exports = ScheduledSlot;
