interface Bmi {
    weight: Number,
    height: Number,
    bmi: String
}
export const calculateBmi = (height:number, weight:number):Bmi=>{
    let output:number = weight / (height /100)**2
    try {
        if(output <15){
            return {
                weight: weight,
                height: height,
                bmi: 'Very severely underweight'
            }
        }else if(output > 15 && output <16){
            return {
                weight: weight,
                height: height,
                bmi: 'Severely underweight'
            }
        }else if(output > 16 && output <18.5){
            return {
                weight: weight,
                height: height,
                bmi: 'Underweight'
            }
        }else if(output > 18.5 && output <25){
            return {
                weight: weight,
                height: height,
                bmi: 'Normal (healthy weight)'
            }
        }else if(output > 25 && output <30){
            return {
                weight: weight,
                height: height,
                bmi: 'Overweight'
            }
        }else if(output > 30 && output <35){
            return {
                weight: weight,
                height: height,
                bmi: 'Moderately obese'
            }
        }else if(output > 35 && output <40){
            return {
                weight: weight,
                height: height,
                bmi: 'Severely obese'
            }
        }else if(output>40){
            return {
                weight: weight,
                height: height,
                bmi: 'Very severely obese'
            }
        }else{
            return{
                weight: weight,
                height: height,
                bmi: 'something went wrong in calculation'
            }
        }
        
    } catch (error) {
        throw(error)
    }
    
} 
// try {
//     const a: number = Number(process.argv[2])
//     const b: number = Number(process.argv[3])
//     if(process.argv.length === 4){
//     if(!(isNaN(a))&& !(isNaN(b))){
//         console.log(calculateBmi(a,b))
//     }else{
//         console.log('Failed to calculate BMI: inputs must be numbers')
//     }
//     }else{
//         console.log('Failed to calculate BMI: two inputs are needed')
//     }
    
// } catch (error:unknown) {
//     let errorMessage = 'Failed to calculate BMI,'
//     if(error instanceof Error){
//         errorMessage += ' because: ' + error.message
//     }
//     console.log(errorMessage);
// }