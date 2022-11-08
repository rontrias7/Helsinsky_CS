


const App = () => {


  
    const course = {
      
      name: 'Half Stack application development',
      
      parts: [
      
      {
      name:  'Fundamentals of React',
      exersises: 10
    },
    
    {
      name:  'Using props to pass data',
      exersises: 7
    },
    
    {
      name:  'State of a component',
      exersises: 14
    }

  ]

}



  return (

      <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>



      
      
      </>
  )
}


const Header = (props) =>{

  console.log(props);

return (

  <>
    <h1>
      {props.course}
    </h1>
  </>


)

}


const Content = (props) =>{

    return(

    <>

      {props.parts.map( (item, index) => {
    return (
    <div key={index}>
      <p> {item.name} </p>    
      <p>Exersises: {item.exersises}</p>
    </div>

      )
    })}

  </>
    )

    

  
}





  const Total = (props) =>{

    return (
    <>
    
    <p>Number of exersises: {props.parts.exersises}</p>
    
    </>
    
    )
    
    }


export default App;
