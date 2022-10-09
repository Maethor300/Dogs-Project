require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Tem} = require("../db.js")
const {YOUR_API_KEY} =process.env;
// router.get("/", async (req,res)=> {
//   const Tem = await Tem.findAll();
//   res.send(Tem);
// })
router.get("/", (req,res)=> {
    axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`)
    .then(response => res.json(response.data.map(i => i.temperament)));
})
router.post("/" ,(req,res)=> {
    
    const {name} = req.body
  return Tem.create({name})
  .then(newTem=> {
     newTem
     res.status(201).send(newTem)
  })
   .catch(error=>{
    next(error)
   })
  })
module.exports = router;