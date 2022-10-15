/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express';
import bodyParser from "body-parser";
import { calculateBmi } from './bmiCalculator';
import {calculateExercise} from './exerciseCalculator';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//checking all elemetns of an array are numbers
const onlyNumbers= (arr: number[]) => arr.every((i: number) => typeof i === "number");

app.get('/hello', (_req, res) => {
  res.send( 'Hello Full Stack!');
});

//bmi calculator
app.get('/bmi', (req,res)=>{
  const {height, weight} = req.query;
try {
    const a = Number(height);
    const b = Number(weight);
    if(!(isNaN(a))&& !(isNaN(b))){
        res.send(calculateBmi(a,b));
    }else{
      res.status(400);
      res.send({
        error: "malformatted parameters"
      });
    }   
} catch (error:unknown) {
  res.status(400);
  res.send({
    error: "malformatted parameters"
  });

}
});
//post request for exercise calculator
app.post('/exercises',(req,res)=>{
 const {daily_exercises, target} = req.body;
 try {
      if(typeof daily_exercises != "undefined" && typeof target != "undefined"){
        if(typeof target ==="number" && onlyNumbers(daily_exercises)){
          res.send(calculateExercise(daily_exercises, target));
        }else{
          res.status(400);
        res.send({
          error: "malformatted parameters"
        });
        } 
      }else{
        res.status(400);
        res.send({
          error: "parameters missing"
        });
      }
  }catch (error:unknown) {
      let errorMessage = 'Failed to calculate,';
      if(error instanceof Error){
          errorMessage += ' because: ' + error.message;
      }
      res.status(400);
      res.send({
        error: errorMessage
      });

  }
 });


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});