import * as React from "react";

import { CoordinateContext } from "../context/CoordinateContext";

const Coordinates = () => {
  const { coordinates, updateCoordinate } = React.useContext(CoordinateContext) as CoordinateContextType;

  return (
    <>
      <h1>Coordinates Layout</h1>
      <hr/>
      {coordinates.map((coordinate: ICoordinate, index: number)=>{
        return <li key={index}>{coordinate.name}</li>
      })}
      <hr/>
    </>
  );
};

export default Coordinates;