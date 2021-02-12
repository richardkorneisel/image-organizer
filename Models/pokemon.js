'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
   static associate(models) {
      Pokemon.belongsToMany(models.User, {
        through: 'PlayerPokemon',
        foreignKey: 'pokemonId',
        otherKey: 'userId'
      });
  };
};
  Pokemon.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};

// date: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     comment: DataTypes.STRING,
//     img: DataTypes.STRING