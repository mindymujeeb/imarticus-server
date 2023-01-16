const express = require('express');
const Router = new express.Router();

const coursesCollection = require('../Model/courseCollection');


// get data
Router.get("/courses", async (_, resp) => {
  const Db = await coursesCollection.find({});
  resp.send(Db);
})
 
 // post data
 Router.post("/courses",async(req,resp) => {
  const data = await coursesCollection(req.body);
  const savedData = await data.save();
  resp.send(savedData);
 });
 
 // update data using params
 Router.patch("/courses/:_id",async(req,resp) => {
   const data =await coursesCollection.findOneAndUpdate(
     req.params.name,
     req.body
   );
   resp.send(data);
 });
 
 // deleting using id
 Router.delete("/courses/:_id",async(req,resp) => {
   const data = await coursesCollection.deleteOne(req.params);
   resp.send(data);
 });

module.exports = Router;