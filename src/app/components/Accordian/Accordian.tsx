import { useContext } from "react";
import * as React from "react";
import { AccordianContext } from '../../context/AccordianContext'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { RiPauseCircleLine, RiPlayCircleLine } from 'react-icons/ri';
import Select, { ActionMeta, OptionsType, OptionTypeBase, ValueType } from 'react-select';  
import { useState } from "react";
import { useEffect } from "react";

const options: any[] = [
    { value: 'AB', label: 'Alberta'},
    { value: 'BC', label: 'British Colombia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador'},
    { value: 'NS', label: 'Nova Scotia'},
    { value: 'ON', label: 'Ontario' },
    { value: 'QC', label: 'Quebec'},
    { value: 'SK', label: 'Saskatchewan' },
];

const Accordian = () => {

    const { accordianState, updateMinimize, handlePlay, updateAccordian, getAccordianState } = useContext<AccordianContextType>(AccordianContext);

    const updatePlayState = () => {
        handlePlay({
            ...accordianState,
            play: !accordianState.play
        });
    }

    const tickInterval = ()=>{
        if(getAccordianState().counterTicks > 0)
        {
            setTimeout(() => {
                decreaseCountTick(getAccordianState());
            }, 1000/getAccordianState().playSpeed);
        }
    }

    useEffect(()=> {
        tickInterval();
    },[accordianState.counterTicks]);



    // decreases counter to 0, where the counter stops
    const decreaseCountTick = (accordian: IAccordian)=>{
        updateAccordian({
            ...accordian,
            counterTicks: accordian.counterTicks - 1,
        });
    }

    const handleCollapse = () => {
        console.log("handleCollapse called");
        updateMinimize((accordianState: IAccordian) => !accordianState.minimized)
    }

    const handleFormUpdate = (e: React.BaseSyntheticEvent) => {
        
        if (e.target.name == "visibleDateCue") {
            e.target.value == "checked" ? e.target.value = true : e.target.value = false;
        }

        let payload :any = e.target.value;
        switch(e.target.name)
        {
            case "from":
                payload = new Date(e.target.value);
                break;
            case "to":
                payload = new Date(e.target.value);
                break;
        }

        updateAccordian({
            ...accordianState,
            [e.target.name]: payload
        });
    }

    function handleChange(value: ValueType<OptionTypeBase, boolean>, actionMeta: ActionMeta<OptionTypeBase>)
    {
        updateAccordian({
            ...accordianState,
            province: value
        });
    }
    return (
        <>
            <div className="accrordian-box">

                <div id="collapse" onClick={handleCollapse}>
                    {accordianState.minimized == true ? <IoIosArrowRoundForward size={40} /> : <IoIosArrowRoundBack size={40} />}
                </div>
                {accordianState.minimized == false && <>
                    <div id="dailyDate" >
                        <div>
                            <h6 style={{ display: "inline", fontSize: "1.3rem" }}>Show Daily date</h6> <input name="visibleDateCue" onClick={handleFormUpdate} type="checkbox" value={accordianState.visibleDateCue ? "checked" : ""} style={{ display: "inline-block" }} />
                        </div>
                    </div>
                    <div id="dateRange">
                        <div id="from" style={{ display: "inline", }} >
                            <p style={{ display: "inline" }}>From</p>  &nbsp;
                        <input name="from" onChange={handleFormUpdate} type="date" value={accordianState.from.toISOString().split('T')[0]} min="2020-01-01" max="2020-12-31" />
                        </div>
                        <div id="to" style={{ display: "inline", paddingLeft: "30px" }}>
                            <p style={{ display: "inline" }}>To</p> &nbsp;
                        <input name="to" onChange={handleFormUpdate} type="date" value={accordianState.to.toISOString().split('T')[0]} min="2020-01-01" max="2020-12-31" />
                        </div>
                    </div>
                    <div id="province">
                        <p>Province</p>&nbsp;<Select name="provinceSelect" className='react-select-container' classNamePrefix="react-select" onChange={handleChange} isMulti isSearchable closeMenuOnSelect={false} options={options} />               
                    </div>
                    <div id="speed" >
                        <p style={{ display: "inline" }}>Play Speed</p>
                        <div style={{ display: "inline" }}>
                            <input name="playSpeed" value={accordianState.playSpeed} onChange={handleFormUpdate} type="range" min="0.25" max="2.75" step="0.1" />
                            <span style={{ backgroundColor: "transparent", border: 'none', maxWidth: '10%' }}>{accordianState.playSpeed}</span>
                        </div>
                    </div>

                    <div id="begin">
                            {accordianState.play == true? <RiPauseCircleLine size={70} onClick={updatePlayState} /> : <RiPlayCircleLine size={70} onClick={updatePlayState} />}
                    </div>
                </>}
            </div>
        </>
    );
}

export default Accordian;