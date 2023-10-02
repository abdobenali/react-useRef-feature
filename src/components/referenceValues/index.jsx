import React,{ useState, useRef } from "react";


const ReferenceValue = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    function handleStart() {
      setStartTime(Date.now());
      setNow(Date.now());
  
      intervalRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }
    function handleStop() {
      clearInterval(intervalRef.current);
    }
  
    return (
      <>
      <h2>Referencing Values</h2>
        <h1>Seconds passed {(now - startTime) / 1000}</h1>
  
        <button
          onClick={() => {
            handleStart();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            handleStop();
          }}
        >
          Stop
        </button>
      </>
    );
}

export default ReferenceValue

