import "./App.css";
import { useState, useEffect } from 'react';

function App() {

    const [time, setTime] = useState('00:00:00 AM');
    const [isON, setIsON] = useState(true);
    const [counter, setCounter] = useState(0);
    const [isBelow, setIsBelow] = useState(false);

    useEffect(() => {
      if(isON) {
        const interval = setInterval(setCurrentTime, 1000);
        return () => clearInterval(interval);
      }
    }, [isON]);

    function setCurrentTime() {
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US'));
    }

    useEffect(() => {
      if(counter < 0) {
        setIsBelow(true);
        setCounter(0);
      }else{
        setIsBelow(false);
      }
    }, [counter]);

    const btnStyleStart = {
      padding: '10px 40px',
      marginRight: '10px',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: 'green',
    }

    const btnStyleStop = {
      ...btnStyleStart,
      backgroundColor: 'red',
    }

    return (
      <div className="App">
        <h1>My Digital Clock</h1>
        <h2 style={{fontSize: "3rem", color: "gray"}}>{time}</h2>
        <button onClick={()=>{
          setIsON(true);
          console.log('Starting....');
        }} style={btnStyleStart}>Start</button>
        <button onClick={()=>{
          setIsON(false);
          console.log('Stopping....');
          }} style={btnStyleStop}>Stop</button>

        <h2 style={{fontSize: '4rem', backgroundColor: '#f4f4f4'}}>Counter: {counter}</h2>
        {isBelow && <h3 style={{fontSize: '1.5rem', color: 'red'}}>Sorry, you can't go below zero!</h3>}
        <button onClick={()=> setCounter((count)=>count+1)} style={btnStyleStart}>Increment</button>
        <button onClick={()=> setCounter((count)=>count-1)} style={btnStyleStop}>Decrement</button>
      </div>
    );
}

export default App;