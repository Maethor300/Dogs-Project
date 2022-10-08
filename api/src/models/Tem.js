const { DataTypes }= require('sequelize');
module.exports = (sequelize) => {
sequelize.define("tem",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey :true,
        allowNull:false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
},{
  timestamps:false
})
}