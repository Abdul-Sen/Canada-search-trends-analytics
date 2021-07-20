import * as React from "react";
import { useContext } from "react";
import { AccordianContext } from '../../context/AccordianContext'

const DateCue = ()=> {
    const {accordianState}  = useContext<AccordianContextType>(AccordianContext)
    
    const formattedDate = ()=>{ // we want 'Mon dd' 
        const myDate = accordianState.currentDate.toUTCString().split(" ").splice(1,2).reverse().join(" ");
        return myDate;
    }
    
    const jsx = function() {
        if(accordianState.visibleDateCue)
        {
            return (
                <div id="DateCueContainer">
                <span id="DateCueValue">
                    
                {formattedDate()}
                </span>
            <br/>
            </div>
            );
        }
        else {
            return (<React.Fragment></React.Fragment>)
        }
    }

    return (
        jsx()
    );
}

export default DateCue;