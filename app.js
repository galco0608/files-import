var express = require('express');
var app = express();
var PORT = 3000;
const sequelize = require('./database');
const Patient = require('./Models/patient');
const Treatment = require('./Models/treatment');
const controller = require('./controller');

app.get('/read/:hospitalName', controller.importData);

Treatment.belongsTo(Patient, { constraints: true, onDelete: 'CASCADE' });
Patient.hasMany(Treatment);

sequelize.sync().then(result => {
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    });
})
    .catch(err => {
        console.log(err);
    })