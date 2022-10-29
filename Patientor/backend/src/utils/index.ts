import {PatientsEntry,Gender} from '../types'

export type NewEntry = Omit<PatientsEntry, 'id'>
type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation:unknown };

//is String
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

//parse string
const parseString = (text: unknown): string => {
    if (!text || !isString(text)) {
      throw new Error('Incorrect or missing text');
    }
  
    return text;
};
//is Date
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
//parse date
const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
//is gander
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(Gender).includes(param);
};
//
//parse gender
const parseGender = (gender: unknown): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};


const toNewPatientyEntry = ({ name, dateOfBirth, ssn, gender, occupation } : Fields): NewEntry => {
    const newEntry: NewEntry = {
        name: parseString(name),
        dateOfBirth: parseDate(dateOfBirth), 
        ssn:parseString(ssn), 
        gender:parseGender(gender), 
        occupation:parseString(occupation),
    };
  
    return newEntry;
  };
  
  
export default toNewPatientyEntry;