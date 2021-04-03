import * as React from "react";
import Todos from "../containers/Todos";
import Coordinate from '../containers/Coordinates';

const Landing = () => {

  return (
    <>
          <Todos />
          <hr />
          <Coordinate />
    </>
  );
};

export default Landing;