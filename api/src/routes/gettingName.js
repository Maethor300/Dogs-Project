require('dotenv').config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Op} = require("sequelize");
const {Dog,Tem} = require("../db.js")
const {YOUR_API_KEY} =process.env
router.get("/",(req,res,next)=> {
  let {name} = req.query
  let apiOriginal;
  let apiData;
  if(name){
    apiOriginal = axios.get(` https://api.thedogapi.com/v1/breeds`)
    apiData = Dog.findAll({
    include: Tem,
    where: {
        name: {
          [Op.iLike]: "%" + name + "%"
        }
        
    },order : [
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
       let recorrer = dogApi.data.filter((i) => i.name.includes(name))
       let filteredDogApi = recorrer.map((i)=>{
        return { //sacar los valores que no quiero enviar
          name: i.name,
          image: i.image.url,
          temperament: i.temperament,
          weight:i.weight.metric
        }
       }) 
       let allDogs = [...filteredDogApi, ...dogDb]//concatenar
       res.send(allDogs)
   })
})
// router.get("/",(req, res, next)=> {
//   return Dog.findAll({
//    include: Tem
//   })
//   .then(dogs =>{
//     res.send(dogs)
//   }).catch((error)=>{
//    next(error)
//   });
// })
// router.get("/",   (req,res)=>{
//   axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`)
//   .then(response => res.json(response.data))
// });
// router.get("/search", async (req,res,next)=> {
//     let {name} = req.query;
    
//     try {
//         if(name){ 
//         const apiOriginal = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`)
//         let json1 = await apiOriginal.data;
//         let recorrer = json1.filter((i) => i.name === name)
//         return res.status(200).send(recorrer)
        
//   }else{
//     res.status(404).json({error: "Please a name"})
//   }
//     }catch(error){
//        next(error)
//     }
// })
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