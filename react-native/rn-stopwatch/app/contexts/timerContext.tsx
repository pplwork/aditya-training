import React, {createContext, useContext, useState} from 'react'

interface ITimer {
  timer: {
    start: boolean;
    hr: number;
    min: number;
    sec: number;
    ms: number;
  };
  setTimer?: React.Dispatch<React.SetStateAction<ITimer["timer"]>>;
}

const timerState:ITimer["timer"] = {
  start: false, 
  hr: 0, 
  min: 0, 
  sec: 0, 
  ms: 0
}

const TimerContext:React.Context<ITimer> = createContext({timer: timerState});

export const useTimer = () => {
  return useContext(TimerContext);
}

export const TimerProvider:React.FC = ({children}):JSX.Element => {
  const [timer, setTimer] = useState<ITimer["timer"]>(timerState);
  return (
    <TimerContext.Provider value={{timer, setTimer}}>
      {children}
    </TimerContext.Provider>
  )
}
