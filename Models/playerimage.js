'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerImage extends Model {
    static associate(models) {
    };
  };
  PlayerImage.init({
    userId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlayerImage',
  });
  return PlayerImage;
};