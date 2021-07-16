import * as React from "react";
import Accordian from "../components/Accordian";
import RSMap from '../components/RSMap';
import ToggleTheme from "../components/ToggleTheme";
import DateCue from '../components/DateCue';

const Landing = () => {
  return (
    <>
      <div className="grid-container">
        <div className="svg">
          <RSMap />
        </div>
        <div className="accordian">
          <Accordian />
        </div>
        <div className="toggleTheme">
          <ToggleTheme />
        </div>
        <div className="dateCue">
          <DateCue />
        </div>
      </div>

    </>
  );
};

export default Landing;