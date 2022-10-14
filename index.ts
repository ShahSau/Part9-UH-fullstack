import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send( 'Hello Full Stack!');
});

app.get('/bmi', (req,res)=>{
  let {height, weight} = req.query
try {
    const a: number = Number(height)
    const b: number = Number(weight)
    if(!(isNaN(a))&& !(isNaN(b))){
        res.send(calculateBmi(a,b))
    }else{
      res.status(400)
      res.send({
        error: "malformatted parameters"
      })
    }   
} catch (error:unknown) {
  res.status(400)
  res.send({
    error: "malformatted parameters"
  })

}
})
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
