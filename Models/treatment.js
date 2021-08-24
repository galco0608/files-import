const Sequelize = require('sequelize');

const sequelize = require('../database');

const Treatment = sequelize.define('treatment', {
  patient_id: {
    type: Sequelize.STRING
  },
  start_date: {
    type: Sequelize.STRING
  },
  end_date: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.STRING
  },
  display_name: {
    type: Sequelize.STRING
  },
  diagnoses: {
    type: Sequelize.STRING
  },
  display_name: {
    type: Sequelize.STRING
  },
  treatment_line: {
    type: Sequelize.STRING
  },
  cycles_xdays: {
    type: Sequelize.STRING
  },
  treatment_id: {
    type: Sequelize.STRING
  },
  Protocol_id: {
    type: Sequelize.STRING
  }
});

module.exports = Treatment;
