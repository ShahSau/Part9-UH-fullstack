import patientsData from '../../data/patients.json';
import { PatientsEntry } from '../types';
import {v1 as uuid} from 'uuid';

const patients : Array<PatientsEntry> = patientsData as Array<PatientsEntry>;

type NonSensitivePatientsEntry = Omit<PatientsEntry, 'ssn'>
//getting entries
const getEntries = (): Array<NonSensitivePatientsEntry> => {
    return patients.map(({id, name, dateOfBirth, gender, occupation})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
  };

//creating entries
type AddPatientEntry = Omit<PatientsEntry, 'id'>
const createEntry = (entry:AddPatientEntry):PatientsEntry =>{
    const addPatient = {
        id: uuid(),
        ...entry
    };
    patients.push(addPatient)
    return addPatient;
}
export default{
    getEntries,
    createEntry,
}