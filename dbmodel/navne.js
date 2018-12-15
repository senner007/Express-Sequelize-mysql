const Sequelize = require('sequelize');
const sequelize = require('../db/dbsetup');

module.exports =  sequelize.define('navne', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    navn: {
      type: Sequelize.STRING
    },
    køn: {
        type: Sequelize.STRING
      }
  },{freezeTableName: true, timestamps: false, id : false});
