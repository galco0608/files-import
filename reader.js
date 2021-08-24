const csv = require('csv-parser');
const fs = require('fs');
const parser = require('./parser');

exports.withParse = (hospitalName, fileType) => {
    let data = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(`${__dirname}/files/${hospitalName}${fileType}.csv`)
            .pipe(csv())
            .on('data', row => {
                const parsedRow = parser.run(row, hospitalName, fileType);
                data.push(parsedRow);
            })
            .on('end', () => resolve(data));
    })
}