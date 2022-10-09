interface Exercise {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
let description:Array<string> =[
    'focus on exercise',
    'better luck next time',
    'not too bad but could be better',
    'good job',
    'Great job',
    'you did it!'

]
const calculateExercise = (hours:Array<number>, goal:number):Exercise =>{
    let exerciseDays:Array<number> = hours.filter(hour => hour !== 0)
    let totalhours:number = hours.reduce((partial, sum)=> partial + sum, 0)
    let ratingD:number = Math.round(totalhours / hours.length)>5 ? 5 : Math.round(totalhours / hours.length)
    return {
        periodLength : hours.length,
        trainingDays :exerciseDays.length,
        success: totalhours >= goal*hours.length ? true : false,
        rating:Math.round(totalhours / hours.length),
        ratingDescription:description[ratingD],
        target:goal,
        average:totalhours / hours.length
    }
}

try {
    console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1], 2))
} catch (error:unknown) {
    let errorMessage = 'Failed to calculate BMI,'
    if(error instanceof Error){
        errorMessage += ' because: ' + error.message
    }
    console.log(errorMessage);
}