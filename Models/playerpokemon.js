'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerPokemon extends Model {
    static associate(models) {
    };
  };
  PlayerPokemon.init({
    userId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlayerPokemon',
  });
  return PlayerPokemon;
};