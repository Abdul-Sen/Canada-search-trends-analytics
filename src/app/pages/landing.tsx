import * as React from "react";
import RSMap from '../components/RSMap';

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  ZoomableGroupProps,
  ComposableMapProps

} from "react-simple-maps";

const Landing = () => {

  return (
    <>
      <RSMap />
    </>
  );
};

export default Landing;