const Patient = require('./Models/patient');
const Treatment = require('./Models/treatment');

exports.createPatient = (patient) => {
    Patient.create({
        patient_id: patient.patient_id,
        mrn: patient.mrn,
        patient_dob: patient.patient_dob,
        is_deceased: patient.is_deceased,
        dos_ts: patient.dos_ts,
        last_name: patient.last_name,
        first_name: patient.first_name,
        gender: patient.gender,
        sex: patient.sex,
        address: patient.address,
        city: patient.city,
        state: patient.state,
        zip_code: patient.zip_code,
        last_modified_date: patient.last_modified_date
    }).then(result => {
        console.log(`${result.dataValues.patient_id} patient was created`);
    }).catch(err => {
        console.log(err);
    })
}

exports.createTreatment = (treatment) => {
    Treatment.create({
        patient_id: treatment.patient_id,
        start_date: treatment.start_date,
        end_date: treatment.end_date,
        active: treatment.active,
        display_name: treatment.display_name,
        diagnoses: treatment.diagnoses,
        display_name: treatment.display_name,
        treatment_line: treatment.treatment_line,
        cycles_xdays: treatment.cycles_xdays,
        treatment_id: treatment.treatment_id
    })
        .then(result => {
            console.log(`${result.dataValues.treatment_id} treatment was created`);
        }).catch(err => {
            console.log(err);
        })
}