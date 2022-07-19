const mongoose = require("mongoose");

const internresourceneedSchema = new mongoose.Schema({
  requester: { type: String, required: true, unique: true },
  team: { type: String},
  projectleader: { type: String, required: true },
  jobtitle: { type: String, required: true },
  localtion: { type: String, required: true },
  internshipprojectname: { type: String },
  directmentor: { type: String, required: true},
  remark: { type: String},
  dc: { type: String, required: true },
  projectdescription: { type: String},
  internresourceneed: { type: String, required: true },
  skills: { type: Array, required: true},
  whatskills: { type: String},
});
module.exports = Internresourceneed = mongoose.model("internresourceneed", internresourceneedSchema);
