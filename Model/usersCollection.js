const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
  username:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  }
});

const Status = new mongoose.model("userData",StatusSchema);

module.exports = Status;


