import patientsData from '../../data/patients.json';
import { PatientsEntry } from '../types';


const patients : Array<PatientsEntry> = patientsData as Array<PatientsEntry>;

type NonSensitivePatientsEntry = Omit<PatientsEntry, 'ssn'>
const getEntries = (): Array<NonSensitivePatientsEntry> => {
    return patients.map(({id, name, dateOfBirth, gender, occupation})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
  };

export default{
    getEntries
}