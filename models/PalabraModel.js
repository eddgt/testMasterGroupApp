"use strict";
const mongoose = require("mongoose");

const PalabraSchema = new mongoose.Schema({
  id: { type: Number },
  palabra: { type: String },
  claves: { type: String }
});

module.exports = mongoose.model("PalabraModel", PalabraSchema);
