const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const name = require("./gettingName.js")
const temp = require("./Tem.js")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use("/dogs", name);
 router.use("/tem", temp);
 
module.exports = router;
