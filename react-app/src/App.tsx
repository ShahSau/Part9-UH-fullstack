const App = () => {

  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const TotaSum  = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0);
  const Header = ({header}:{header:string})=>{
    return <h1>{header}</h1>;
  };
  const Content = ({name,exercise}:{name:string,exercise:number})=>{
    return <p>{name} {exercise}</p>;
  };
  const Total = ({sum}:{sum:number})=>{
    return <p>Number of exercises{" "}{sum}</p>;
  };
  return (
    <div>
      <Header header={courseName} />
      <Content name={courseParts[0].name} exercise={courseParts[0].exerciseCount} />
      <Content name={courseParts[1].name} exercise={courseParts[1].exerciseCount} />
      <Content name={courseParts[2].name} exercise={courseParts[2].exerciseCount} />
      <Total sum={TotaSum} />
    </div>
  );
};

export default App;