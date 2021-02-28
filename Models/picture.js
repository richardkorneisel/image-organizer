'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
   static associate(models) {
      Picture.belongsToMany(models.User, {
        through: 'PlayerPicture',
        foreignKey: 'pictureId',
        otherKey: 'userId'
      });
  };
};
  Picture.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};


// date: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     comment: DataTypes.STRING,
//     img: DataTypes.STRING