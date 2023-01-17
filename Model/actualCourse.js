const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  batch_id:{
    type:String,
    require:true
  },
  modules:{
    type:Array,
    require:true
  },
  content:{
    type:Array,
    require:true
  },
  time:{
    type:Array,
    required:true
  }
});

const Status = new mongoose.model("courseDetails",StatusSchema);

module.exports = Status;


