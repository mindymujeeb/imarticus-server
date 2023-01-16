const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courses:{
    type:Array,
  }
});

const Status = new mongoose.model("courses",CourseSchema);

module.exports = Status;


