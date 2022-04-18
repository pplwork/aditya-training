import React, {createContext, useContext, useState} from 'react'

interface ILap {
  laps: {
    key: string;
    value: string;
  }[];
  setLaps?: React.Dispatch<React.SetStateAction<ILap["laps"]>>;
}

const lapState:ILap["laps"] = [];

const LapContext:React.Context<ILap> = createContext({laps: lapState});

export const useLaps = () => {
  return useContext(LapContext);
}

export const LapProvider:React.FC = ({children}):JSX.Element => {
  const [laps, setLaps] = useState<ILap["laps"]>(lapState);
  return (
    <LapContext.Provider value={{laps, setLaps}}>
      {children}
    </LapContext.Provider>
  )
}
