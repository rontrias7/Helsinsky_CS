import {useState} from 'react';


const App = () => {

  // Initializing status
  let [left, setLeft] = useState(0);
  let [right, setRight] = useState(0);

  // Handle functions  (I'm thinking of some way to simplify them.)
  let addOneLeft = () => setLeft(left+ 1);
  let addOneRight = () => setRight(right +1);
  

  return (
    <>
      {/* Joining the left & right variables to passing them as an uniquie object */}
      <Display position={{left, right}}/>
      <Button onClick={addOneLeft} text="Left"/>
      <Button onClick={addOneRight} text="Right"/>
    </>
    
  );

}



  const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  // destructuring the position object inside the props' object
  const Display = ({position: {left, right}}) => <div>Left: {left} · Rigth: {right}</div>;





export default App;
