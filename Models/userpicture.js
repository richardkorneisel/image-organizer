'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPicture extends Model {
    static associate(models) {
    };
  };
  UserPicture.init({
    userId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserPicture',
  });
  return UserPicture;
};