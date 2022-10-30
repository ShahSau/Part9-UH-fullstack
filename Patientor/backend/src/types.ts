export interface DiagnosesEntry {
    code: string;
    name: string;
    latin?: string;
}

// export type Gender = 'male' | 'female' | 'other'
export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}
export interface PatientsEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn:string;
    gender: Gender;
    occupation: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[]
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;