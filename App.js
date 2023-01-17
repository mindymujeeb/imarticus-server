const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
require('./Controller/DBConnect');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const Users = require('./Controller/Users');
const Courses = require('./Controller/Courses');
const ActualCourse = require('./Controller/ActualCourse');
const Videos = require('./Controller/Videos');

app.use(express.json());
app.use(Users);
app.use(Courses);
app.use(ActualCourse);
app.use(Videos);

const PORT = process.env.PORT || 3000;

app.get('/', (_, resp) => {
  resp.send('Server is live, you can now access the data');
})

app.listen(PORT, ()=>{
  console.log(`Connected to the port ${PORT}`);
})