import { useContext } from "react";
import * as React from "react";
import { AccordianContext } from '../../context/AccordianContext'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { RiPauseCircleLine, RiPlayCircleLine } from 'react-icons/ri';
import { useEffect } from "react";
import ProvinceSelect from "../ProvinceSelect";

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
        if(accordianState.counterTicks <= 0 && accordianState.play == true)
        {
            updatePlayState();
        }
    },[accordianState.counterTicks]);



    // decreases counter to 0, where the counter stops
    const decreaseCountTick = (accordian: IAccordian)=>{
        updateAccordian({
            ...accordian,
            counterTicks: accordian.counterTicks - 1,
            currentDate: new Date(accordian.currentDate.setHours(24))
        });
    }

    const handleCollapse = () => {
        updateMinimize((accordianState: IAccordian) => !accordianState.minimized)
    }

    const handleFormUpdate = (e: React.BaseSyntheticEvent) => {
        let value : any = e.target.value;
        let name: string = e.target.name;
        let payload :any;

        switch(name)
        {
            case "from":
                payload = new Date(value);
                break;
            case "to":
                payload = new Date(value);
                break;
            case "visibleDateCue":
                payload = e.target.checked? true : false;
        }

        updateAccordian({
            ...accordianState,
            [name]: payload
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
                            <h6 style={{ display: "inline", fontSize: "1.3rem" }}>Show Daily date</h6> <input name="visibleDateCue" onChange={handleFormUpdate} type="checkbox" style={{ display: "inline-block" }} checked={accordianState.visibleDateCue} />
                        </div>
                    </div>
                    <div id="dateRange">
                        <div id="from" style={{ display: "inline", }} >
                            <p style={{ display: "inline" }}>From</p>  &nbsp;
                        <input name="from" required readOnly={accordianState.play? true:false} style={accordianState.play? {backgroundColor: "#CDCDCD"} : {} } onChange={handleFormUpdate} type="date" value={accordianState.from.toISOString().split('T')[0]} min="2020-01-01" max={accordianState.to.toISOString().split('T')[0]} />
                        </div>
                        <div id="to" style={{ display: "inline", paddingLeft: "30px" }}>
                            <p style={{ display: "inline" }}>To</p> &nbsp;
                        <input name="to" required readOnly={accordianState.play? true:false} style={accordianState.play? {backgroundColor: "#CDCDCD"} : {} } onChange={handleFormUpdate} type="date" value={accordianState.to.toISOString().split('T')[0]} min={accordianState.from.toISOString().split('T')[0]} max="2020-12-31" />
                        </div>
                    </div>
                    <div id="province">
                        <p>Province</p>&nbsp;<ProvinceSelect />
                    </div>
                    <div id="speed">
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