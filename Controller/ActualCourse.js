const express = require('express');
const Router = new express.Router();

const actualCourseCollection = require('../Model/actualCourse');


// get data
Router.get("/actual-course", async (_, resp) => {
  const Db = await actualCourseCollection.find({});
  resp.send(Db);
})
 
 // post data
 Router.post("/actual-course",async(req,resp) => {
  const data = await actualCourseCollection(req.body);
  const savedData = await data.save();
  resp.send(savedData);
 });
 
 // update data using params
 Router.patch("/actual-course/:_id",async(req,resp) => {
   const data =await actualCourseCollection.findOneAndUpdate(
     req.params.name,
     req.body
   );
   resp.send(data);
 });
 
 // deleting using id
 Router.delete("/actual-course/:_id",async(req,resp) => {
   const data = await actualCourseCollection.deleteOne(req.params);
   resp.send(data);
 });

module.exports = Router;