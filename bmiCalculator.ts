
const calculateBmi = (height:number, weight:number):string=>{
    let output:number = weight / (height /100)**2
    if(output <15){
        return 'Very severely underweight'
    }else if(output > 15 && output <16){
        return 'Severely underweight'
    }else if(output > 16 && output <18.5){
        return 'Underweight'
    }else if(output > 18.5 && output <25){
        return 'Normal (healthy weight)'
    }else if(output > 25 && output <30){
        return 'Overweight'
    }else if(output > 30 && output <35){
        return 'Moderately obese'
    }else if(output > 35 && output <40){
        return 'Severely obese'
    }else if(output>40){
        return 'Very severely obese'
    }
} 
try {
    const a: number = Number(process.argv[2])
    const b: number = Number(process.argv[3])
    if(process.argv.length === 4){
    if(!(isNaN(a))&& !(isNaN(b))){
        console.log(calculateBmi(a,b))
    }else{
        console.log('Failed to calculate BMI: inputs must be numbers')
    }
    }else{
        console.log('Failed to calculate BMI: two inputs are needed')
    }
    
} catch (error:unknown) {
    let errorMessage = 'Failed to calculate BMI,'
    if(error instanceof Error){
        errorMessage += ' because: ' + error.message
    }
    console.log(errorMessage);
}