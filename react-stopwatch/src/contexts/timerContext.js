import {createContext, useContext, useState} from 'react'

const TimerContext = createContext();

export function useTimer () {
  return useContext(TimerContext);
}

export function TimerProvider({children}){
  const [timer, setTimer] = useState({start: false, hr: 0, min: 0, sec: 0, ms: 0});
  return (
    <TimerContext.Provider value={{timer, setTimer}}>
      {children}
    </TimerContext.Provider>
  )
}
