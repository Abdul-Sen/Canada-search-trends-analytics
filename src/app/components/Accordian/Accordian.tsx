import * as React from "react";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { RiPlayCircleLine } from 'react-icons/ri';


const Accordian = () => {
    return (
        <>
            <div className="accrordian-box">
                <div id="back">
                    <IoIosArrowRoundBack size={40} />
                </div>
                <div id="dailyDate" >
                    <div>
                        <h6 style={{ display: "inline", fontSize: "1.3rem" }}>Show Daily date</h6> <input type="checkbox" style={{ display: "inline-block" }} />
                    </div>
                </div>
                <div id="dateRange">
                    <div id="from" style={{ display: "inline",  }} >
                        <p style={{ display: "inline" }}>From</p>  &nbsp;
                        <input type="date" value="2020-01-01" min="2020-01-01" max="2020-12-31" />
                    </div>
                    <div id="to" style={{ display: "inline", paddingLeft: "30px" }}>
                        <p style={{ display: "inline" }}>To</p> &nbsp;
                        <input type="date" value="2020-01-01" min="2020-01-01" max="2020-12-31" />
                    </div>
                </div>
                <div id="province">
                    <p style={{ display: "inline" }}>Province</p> &nbsp;
                    <select style={{ display: "inline" }} name="cars" id="cars" multiple>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>

                </div>
                <div id="speed" >
                    <p style={{ display: "inline" }}>Play Speed</p>
                    <input type="range" min="0.25" max="1.75" />
                </div>

                <div id="begin">
                    <RiPlayCircleLine size={70} />
                </div>

            </div>
        </>
    );
}

export default Accordian;