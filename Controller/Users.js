const express = require('express');
const Router = new express.Router();

const usersCollection = require('../Model/usersCollection');


// get data
Router.get("/users", async (_, resp) => {
  const Db = await usersCollection.find({});
  resp.send(Db);
})
 
 // post data
 Router.post("/users",async(req,resp) => {
  const data = await usersCollection(req.body);
  const savedData = await data.save();
  resp.send(savedData);
 });
 
 // update data using params
 Router.patch("/users/:_id",async(req,resp) => {
   const data =await usersCollection.findOneAndUpdate(
     req.params.name,
     req.body
   );
   resp.send(data);
 });
 
 // deleting using id
 Router.delete("/users/:_id",async(req,resp) => {
   const data = await usersCollection.deleteOne(req.params);
   resp.send(data);
 });

module.exports = Router;