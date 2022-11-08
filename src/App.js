



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
        <h1>{course}</h1>

        <p>
          {part1} {exersises1}
        </p>

      
        <p>
          {part2} {exersises2}
        </p>

      
        <p>
          {part3} {exersises3}
        </p>

      <p>Number of exersises: {exersises1 + exersises2 + exersises3}</p>
      
      </>
  )
}


export default App;
