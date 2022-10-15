interface Exercise {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
const description:Array<string> =[
    'focus on exercise',
    'bad',
    'not too bad but could be better',
    'good job',
    'Great job',
    'you did it!'

];
export const calculateExercise = (hours:Array<number>, goal:number):Exercise =>{
    const exerciseDays:Array<number> = hours.filter(hour => hour !== 0);
    const totalhours:number = hours.reduce((partial, sum)=> partial + sum, 0);
    const ratingD:number = Math.round(totalhours / hours.length)>5 ? 5 : Math.round(totalhours / hours.length);
    return {
        periodLength : hours.length,
        trainingDays :exerciseDays.length,
        success: totalhours >= goal*hours.length ? true : false,
        rating:Math.round(totalhours / hours.length),
        ratingDescription:description[ratingD],
        target:goal,
        average:totalhours / hours.length
    };
};