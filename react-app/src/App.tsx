const App = () => {
// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}
interface CourseDescriptionPart extends CoursePartBase{
  description:string;
}
interface CourseSpecialPart extends CourseDescriptionPart{
  type:"special";
  requirements: Array<string>

}
interface CourseNormalPart extends CourseDescriptionPart {
  type: "normal";
}
interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}
interface CourseSubmissionPart extends CourseDescriptionPart {
  type: "submission";
  exerciseSubmissionLink: string;
}
//for rendering
interface CourseAll extends CoursePartBase{
  description?:string;
  requirements?: Array<string>
  groupProjectCount?: number;
  exerciseSubmissionLink?: string;
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecialPart;

// this is the new coursePart variable
const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the easy course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the hard course part",
    type: "normal"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
  }
];
const courseName = "Half Stack application development";
const TotaSum  = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0);

//header
const Header = ({header}:{header:string})=>{
  return <h1>{header}</h1>;
};


type CourseAllN = Omit<CourseAll, "type">;
const Content = ({name,exerciseCount,description,exerciseSubmissionLink,groupProjectCount,requirements}: CourseAllN )=>{
  const str = requirements?.join(', ');
  return(
  <>
    <h2>{name} {exerciseCount}</h2>
    <p>{description}</p>
    {groupProjectCount && <p>project exercises {groupProjectCount}</p>}
    {exerciseSubmissionLink && <p>submit to {exerciseSubmissionLink}</p>}
    {requirements && <p>required skills {str}</p>}
  </>);
};
//total
const Total = ({sum}:{sum:number})=>{
  return <p>Number of exercises{" "}{sum}</p>;
};
/**
 * Helper function for exhaustive type checking
 */
 const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

  return (
    <div>
      <>
      <Header header={courseName} />
      {courseParts.map((part,index)=>{
        switch(part.type){
          case "normal":
            return <Content key={index} name={part.name} exerciseCount={part.exerciseCount} description={part.description} />;
            break;
          case "groupProject":
            return <Content key={index} name={part.name} exerciseCount={part.exerciseCount} groupProjectCount={part.groupProjectCount}/>;
            break;
          case "submission":
            return <Content key={index} name={part.name} exerciseCount={part.exerciseCount} description={part.description} exerciseSubmissionLink ={part.exerciseSubmissionLink}/>;
            break;
          case "special":
            return <Content key={index} name={part.name} exerciseCount={part.exerciseCount} description={part.description} requirements={part.requirements}/>;
            break;
          default:
            return assertNever(part);
        }
      }
      )}
      
      <Total sum={TotaSum} />
      </>
    </div>
  );
};

export default App;