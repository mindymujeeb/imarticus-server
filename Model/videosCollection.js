const mongoose = require('mongoose');

const VideosSchema = new mongoose.Schema({
  url:{
    type:String,
    require:true
  }
});

const Status = new mongoose.model("videos",VideosSchema);

module.exports = Status;


