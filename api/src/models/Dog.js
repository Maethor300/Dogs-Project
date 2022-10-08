const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey :true,
      allowNull:false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    weight: {
      type:DataTypes.FLOAT,
      allowNull:false
    },
    yearsOfLife: {
      type:DataTypes.INTEGER,
    }
  },{
    timestamps:false
  });
};
