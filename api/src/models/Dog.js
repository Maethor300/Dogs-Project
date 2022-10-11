const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey :true,
      allowNull:false,
      defaultValue:Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.FLOAT,
      
    },
    weight: {
      type:DataTypes.FLOAT,
    
    },
    yearsOfLife: {
      type:DataTypes.INTEGER,
    }
  },{
    timestamps:false
  });
};
