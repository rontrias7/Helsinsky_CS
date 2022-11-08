import { isContentEditable } from "@testing-library/user-event/dist/utils"




const App = () => {

    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exersises1 = 10
    const part2 = 'Using props to pass data'
    const exersises2 = 7
    const part3 = 'State of a component'
    const exersises3 = 14


  return (

      <>
        <Header course={course} />
        <Content part={part1} exersises={exersises1} />
        <Content part={part2} exersises={exersises2} />
        <Content part={part3} exersises={exersises3} />
        <Total total={exersises1 + exersises2 + exersises3}/>



      
      
      </>
  )
}


const Header = (props) =>{

return (

  <>
    <h1>{props.course}</h1>
  </>


)

}


const Content = (props) =>{

  return (
  <>
   
    <p>
      {props.part} {props.exersises}
    </p>
  </>

  );
  
  }





  const Total = (props) =>{

    return (
    <>
    
    <p>Number of exersises: {props.total}</p>
    
    </>
    
    )
    
    }


export default App;
