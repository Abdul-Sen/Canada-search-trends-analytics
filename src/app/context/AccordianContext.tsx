import * as React from 'react';
import { FC,useRef } from 'react';

const DEFAULT_ACCORDIAN: IAccordian = {
    minimized: false,
    from: new Date("2020-01-01"),
    to: new Date("2020-12-31"),
    play: false,
    playSpeed: 1.25,
    province: [],
    visibleDateCue: true,
    currentDate: new Date("2020-01-01"),
    counterTicks: 0,
    counterTwo: 0
};

export const AccordianContext = React.createContext<AccordianContextType>(undefined!);

const AccordianProvider: FC<React.ReactNode> = ( { children } ) => {
    
    const [accordianState, setAccordianState] = React.useState<IAccordian>(DEFAULT_ACCORDIAN);
    
    const countRef = useRef(accordianState);
    countRef.current = accordianState;

    const updateMinimize = ()=> {
        setAccordianState( (prevState: IAccordian) => ({
            ...prevState,
            minimized: !prevState.minimized
        }));
    }

    const calcDays = (from: Date, to: Date) : number => {
        let temp: number = to.getTime() - from.getTime();
        temp =  temp/(1000* 60 * 60 * 24)
        return temp;
      }

    const handlePlay = (newState: IAccordian) => {
        setAccordianState((prevAccordianState) => {

          let nextAccordianState;

          if (!prevAccordianState.play) {
            const noTimesToUpdateAccordianState: number = calcDays(
                newState.from,
                newState.to
            );

            nextAccordianState = {
              ...prevAccordianState,
              counterTicks: noTimesToUpdateAccordianState,
              counterTwo: noTimesToUpdateAccordianState,
              play: true,
              currentDate: newState.from
            };

          } else {
            nextAccordianState = {
              ...prevAccordianState,
              counterTicks: 0,
              counterTwo: 0,
              play: !prevAccordianState.play,
            };
          }

          return nextAccordianState;
        });
      };

      const updateAccordian = (newState:IAccordian)=> {
        setAccordianState((prevState) : IAccordian => ({
            ...prevState,
            ...newState
        }));
    }
      
    const getAccordianState = () : IAccordian => {
      return countRef.current;
    }

    return (
        <AccordianContext.Provider value={{ accordianState, updateMinimize, handlePlay, updateAccordian, getAccordianState }}>
            {children}
        </AccordianContext.Provider>

    )
}

export default AccordianProvider;