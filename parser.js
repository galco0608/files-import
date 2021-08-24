exports.run = (originData, hospitalName, fileType) => {
    try {
        const schema = require(`./Schemes/${hospitalName}${fileType}`)["rules"];
        return Object.keys(schema).reduce((data, key) => {
            const originKey = schema[key];
            data[key] = originData[originKey];
            return data;
        }, {})
    } catch (e) {
        console.log("schema doesn't exist");
    }
}
