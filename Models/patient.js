const Sequelize = require('sequelize');

const sequelize = require('../database');

const patient = sequelize.define('patient', {
    patient_id: {
        type: Sequelize.STRING
    },
    mrn: {
        type: Sequelize.INTEGER
    },
    patient_dob: {
        type: Sequelize.DATE
    },
    is_deceased: {
        type: Sequelize.STRING
    },
    dos_ts: {
        type: Sequelize.STRING,
        allowNull: true
    },
    last_name: {
        type: Sequelize.STRING
    },
    first_name: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.STRING
    },
    last_modified_date: {
        type: Sequelize.STRING
    },
});

module.exports = patient;
