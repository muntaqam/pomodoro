import React, { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] =useState(1500); //25 min in seconds
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        let interval = null;
        if(isActive && seconds > 0){
            interval = setInterval(() =>{
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }else if (!isActive && seconds !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const toggle =() =>{
        setIsActive(!isActive);
    };

    const reset = () => {
        setSeconds(1500);
        setIsActive(false);
    };
    return (
    <div>
      <h2>Pomodoro Timer</h2>
      <div>
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </div>
      <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;


