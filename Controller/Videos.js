const express = require('express');
const Router = new express.Router();

const VideosCollection = require('../Model/videosCollection');


// get data
Router.get("/videos", async (_, resp) => {
  const Db = await VideosCollection.find({});
  resp.send(Db);
})
 
 // post data
 Router.post("/videos",async(req,resp) => {
  const data = await VideosCollection(req.body);
  const savedData = await data.save();
  resp.send(savedData);
 });
 
 // update data using params
 Router.patch("/videos/:_id",async(req,resp) => {
   const data =await VideosCollection.findOneAndUpdate(
     req.params.name,
     req.body
   );
   resp.send(data);
 });
 
 // deleting using id
 Router.delete("/videos/:_id",async(req,resp) => {
   const data = await VideosCollection.deleteOne(req.params);
   resp.send(data);
 });

module.exports = Router;