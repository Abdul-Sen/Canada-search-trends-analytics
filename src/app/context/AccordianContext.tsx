import * as React from 'react';

const DEFAULT_ACCORDIAN: IAccordian = {
    minimized: false,
    from: new Date("2020-01-01"),
    to: new Date("2020-12-31"),
    play: false,
    playSpeed: 1.25,
    province: [],
    visibleDateCue: true,
    currentDate: new Date()
};

export const AccordianContext = React.createContext< AccordianContextType>(undefined!);

const AccordianProvider: React.FC<React.ReactNode> = ( { children } ) => {
    
    const [accordianState, setAccordianState] = React.useState<IAccordian>(DEFAULT_ACCORDIAN);
    
    const updateMinimize = ()=> {
        setAccordianState( (prevState: IAccordian) => ({
            ...prevState,
            minimized: !prevState.minimized
        }));
    }

    const updateAccordian = (newState:IAccordian)=> {
        setAccordianState(newState);
    }

    return (
        <AccordianContext.Provider value={{ accordianState, updateMinimize, updateAccordian }}>
            {children}
        </AccordianContext.Provider>

    )
}

export default AccordianProvider;