require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Op} = require("sequelize");
const {Dog,Tem} = require("../db.js")
const {YOUR_API_KEY} =process.env
router.get("/Home", (req,res)=>{
  axios.get(`https://api.thedogapi.com/v1/breeds?key${YOUR_API_KEY}`).then(response => res.status(200).json(response.data))
})
router.get("/search",(req,res,next)=> {
  let {name} = req.query
  let apiOriginal;
  let apiData;
  try{ 
  if(name){
    apiOriginal = axios.get(`https://api.thedogapi.com/v1/breeds?key${YOUR_API_KEY}`)
    apiData = Dog.findAll({
    include: Tem,
    where: {
        name: {
          [Op.iLike]: "%" + name + "%"
        }
        
    },order:[
       ["name", "ASC" ]
    ]
   })
  }else{
    apiOriginal = axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`)
      apiData = Dog.findAll({
      include: Tem
     }) 
  }
   Promise.all([
    apiOriginal,
    apiData
   ]).then((respuesta)=> {
       const [dogApi, //respuesta de la api
         dogDb //respuesta de la base de datos
        ] = respuesta;
       let recorrer = dogApi.data.filter((i) => i.name.toLowerCase().includes(name.toLowerCase()));
       let filteredDogApi = recorrer.map((i)=>{
        return { //sacar los valores que no quiero enviar
          name: i.name,
          image: i.image.url,
          temperament: i.temperament,
          weight:i.weight.metric
        }
       }) 
       let allDogs = [...filteredDogApi, ...dogDb]//concatenar
       res.status(200).json(allDogs);
   })}catch(error){
    next(error)
   }
})
router.get("/:id", async(req,res,next)=> {
   let id = parseInt(req.params.id);
  try { 
  if(typeof id === "string" && id.length > 8){
    let dog = await Dog.findByPk(id)
    res.send(dog);
  }else {
    let apiDta = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`);
    let info = await apiDta.data;
    let filtro = info.filter(i => i.id === id);
    let recorrer = filtro.map(i => {
    
      return {
        id: i.id,
        height:i.height.metric,
        weight:i.weight.metric,
        yearsOfLife: i.life_span
      }
    })
  res.send(recorrer)
  }
  }
  catch(error){
    next(error)
  }
}) 
router.post("/", async (req,res,next)=> {
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
  next(error)
}
})
router.post("/:dogId/:tem/:temId", async (req,res,next)=> {
  try{ 
   const {dogId, temId} = req.params;
   const dog = await Dog.findByPk(dogId);
   await dog.addTem(temId);
   res.send(200)}catch(error){
    next(error)
   }
})
 
 
module.exports = router;