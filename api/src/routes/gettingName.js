require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const {YOUR_API_KEY} =process.env
router.get("/", (req,res)=>{
  axios.get("https://api.thedogapi.com/v1/breeds")
  .then(response => res.json(response.data))
});
router.get("/search", async (req,res)=> {
    let {name} = req.query;
    
    try {
        if(name){ 
        const apiOriginal = await axios.get(` https://api.thedogapi.com/v1/breeds`)
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
 
module.exports = router;