const reader = require('./reader');
const dbHandler = require('./dbHandler');

exports.importData = async (req, res) => {
    const hospitalName = req.params.hospitalName;
    const patients = await reader.withParse(hospitalName, "_Patient");
    const treatments = await reader.withParse(hospitalName, "_Treatment");
    const mergedData = merge(patients, treatments);
    await insertParsedData(mergedData);
    res.send('succeed').status(200);
}

const merge = (patients, treatments) => {
    return patients.reduce((mergedData, currentPatient) => {
        const patientTreatments = treatments.filter(treatment => treatment.patient_id === currentPatient.patient_id);
        const updatePatient = { ...currentPatient, treatments: patientTreatments };
        mergedData.push(updatePatient);
        return mergedData;
    }, [])
}

const insertParsedData = (patients) => {
    patients.forEach(async (patient) => {
        await dbHandler.createPatient(patient);
        const { treatments } = patient;
        treatments.forEach(treatment => dbHandler.createTreatment(treatment));
    });
}