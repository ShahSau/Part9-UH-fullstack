interface Bmi {
    weight: number,
    height: number,
    bmi: string
}
export const calculateBmi = (height:number, weight:number):Bmi=>{
    const output:number = weight / (height /100)**2;
        if(output <15){
            return {
                weight: weight,
                height: height,
                bmi: 'Very severely underweight'
            };
        }else if(output > 15 && output <16){
            return {
                weight: weight,
                height: height,
                bmi: 'Severely underweight'
            };
        }else if(output > 16 && output <18.5){
            return {
                weight: weight,
                height: height,
                bmi: 'Underweight'
            };
        }else if(output > 18.5 && output <25){
            return {
                weight: weight,
                height: height,
                bmi: 'Normal (healthy weight)'
            };
        }else if(output > 25 && output <30){
            return {
                weight: weight,
                height: height,
                bmi: 'Overweight'
            };
        }else if(output > 30 && output <35){
            return {
                weight: weight,
                height: height,
                bmi: 'Moderately obese'
            };
        }else if(output > 35 && output <40){
            return {
                weight: weight,
                height: height,
                bmi: 'Severely obese'
            };
        }else if(output>40){
            return {
                weight: weight,
                height: height,
                bmi: 'Very severely obese'
            };
        }else{
            return{
                weight: weight,
                height: height,
                bmi: 'something went wrong in calculation'
            };
        }
    
};