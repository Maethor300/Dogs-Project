require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const { Dog } = require("../db.js")
const {YOUR_API_KEY} =process.env
router.get("/", (req, res, next)=> {
   return Dog.findAll()
   .then(dogs =>{
     res.send(dogs)
   });
})
// router.get("/",   (req,res)=>{
//   axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`)
//   .then(response => res.json(response.data))
// });
router.get("/search", async (req,res)=> {
    let {name} = req.query;
    
    try {
        if(name){ 
        const apiOriginal = await axios.get(` https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`)
        let json1 = await apiOriginal.data;
        let recorrer = json1.filter((i) => i.name === name)
        return res.status(200).send(recorrer)
        
  }else{
    res.status(404).json({error: "Please a name"})
  }
    }catch(e){
       res.status(404).json({error: e.toString()})
    }
})
router.post("/", async (req,res)=> {
  try { 
  const {name, height, weight, yearsOfLife} = req.body
  const newDog = await Dog.create({
    name,
    height,
    weight,
    yearsOfLife,
  })
  res.status(200).json(newDog);
}catch(error){
  res.status(404).json({error: error.toString()})
}
})
 
 
module.exports = router;