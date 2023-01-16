const mongoose = require('mongoose');
const URL = process.env.URL

mongoose.connect(URL).then(()=>{
  console.log('Connected to Database');
}).catch(()=>{
  console.log("Disconnected from Database")
})