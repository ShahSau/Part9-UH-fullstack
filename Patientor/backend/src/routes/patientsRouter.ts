import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientyEntry from '../utils';


const router = express.Router();
router.get('/', (_req, res) => {
    res.send(patientsService.getEntries());
  });

router.get('/:id', (req, res) => {
    // res.send(patientsService.getEntries());
    let id = req.params.id;
    res.send(patientsService.getEntry(id))
});
router.post('/', (req,res)=>{
    try {
        const newPatientEntry = toNewPatientyEntry(req.body)
        const newPatient = patientsService.createEntry(newPatientEntry)
        res.json(newPatient)
    } catch (error:unknown) {
        let errorMessage = 'Something went wrong.'
        if(error instanceof Error){
            errorMessage += 'Error: ' + error.message
        }
        res.status(400).send(errorMessage)
    }
})

export default router;