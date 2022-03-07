import {createContext, useContext, useState} from 'react'

const LapContext = createContext();

export function useLaps () {
  return useContext(LapContext);
}

export function LapProvider({children}){
  const [laps, setLaps] = useState([]);
  return (
    <LapContext.Provider value={{laps, setLaps}}>
      {children}
    </LapContext.Provider>
  )
}
