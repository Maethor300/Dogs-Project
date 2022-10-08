const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const name = require("./gettingName.js")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use("/dogs", name)
 
module.exports = router;
