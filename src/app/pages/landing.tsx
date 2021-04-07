import * as React from "react";
import Accordian from "../components/Accordian";
import RSMap from '../components/RSMap';
import ToggleTheme from "../components/ToggleTheme";
import DateCue from '../components/DateCue';
const Landing = () => {

  return (
    <>
      <div id="theme-btn-container">
        <ToggleTheme />
      </div>
      <RSMap />
      <div id="accordian-container">
        <Accordian />
      </div>
      <div id="state-date-container">
        <DateCue />
      </div>
    </>
  );
};

export default Landing;