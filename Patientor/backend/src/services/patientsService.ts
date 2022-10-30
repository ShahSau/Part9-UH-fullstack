import patientsData from '../../data/patients.json';
import { PatientsEntry,Patient } from '../types';
import {v1 as uuid} from 'uuid';

const patients : Array<PatientsEntry> = patientsData as Array<PatientsEntry>;

type NonSensitivePatientsEntryOld = Omit<PatientsEntry, 'ssn'>
type NonSensitivePatientsEntry = Omit<NonSensitivePatientsEntryOld, 'entries'>
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

//getting single patient
const getEntry = (id: string):Patient|any=>{
    return patientsData.find(p=> p.id === id)
}
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
    getEntry
}