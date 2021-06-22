import * as React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AccordianContext } from '../../context/AccordianContext'

const DateCue = ()=> {
    const {accordianState}  = useContext<AccordianContextType>(AccordianContext)
    
    useEffect(()=> {
        console.log(accordianState.currentDate);
    },[accordianState]);
    const formattedDate = ()=>{ // we want 'Mon dd' 
        const myDate = accordianState.currentDate.toUTCString().split(" ").splice(1,2).reverse().join(" ");
        return myDate;
    }
    
    return (
        <div id="DateCueContainer">
            <span id="DateCueValue">
            {formattedDate()}
            </span>
        <br/>
        </div>
    );
}

export default DateCue;