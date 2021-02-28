'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerPicture extends Model {
    static associate(models) {
    };
  };
  PlayerPicture.init({
    userId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlayerPicture',
  });
  return PlayerPicture;
};