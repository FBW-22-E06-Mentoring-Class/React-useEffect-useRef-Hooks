//lifeCycle in React
// lifeCycle Phases
//1. mounting phase (creation of your component and rendering of your compnent in real dom)
//2. updating phase (change in state or props)
//3. unmounting (removing component or unmounting component from real dom)

import React from 'react';
import { useEffect } from 'react';
import { useRef} from 'react';
import Timer from './Timer';
import Users from './Users';

function App() {
/*   const [timerStatus,setTimerStatus] = useState(true) */

const myRef = useRef()
/* const inputRef = useRef() */

useEffect(()=>{
  myRef.current.style.backgroundColor="blue"
},[])

  return (
    <div className="App">
      {/* <input type="text" ref={inputRef} /> */}
      <h1 ref={myRef} >React Hooks : useEffect and useRef</h1>
     {/*  {timerStatus && <Timer/>} 
      <button onClick={()=>setTimerStatus(!timerStatus)} >Show Time / Hide Time </button> */}
    
    <Users/>
    </div>
  );
}{}

export default App;


//Browser Events //DOM Munipulation
// load  // DOMcontentLoaded // beforeunload 