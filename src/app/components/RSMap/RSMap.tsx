import * as React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  ZoomableGroupProps,
  ComposableMapProps

} from "react-simple-maps";

import * as data from './canadaTested.geojson';

// RSM props
const geoStyle = {
  default: {
    fill: "#D6D6DA",
    outline: "none",
  },
  hover: {
    fill: "#F53",
    outline: "none"
  },
  pressed: {
    fill: "#E42",
    outline: "none"
  }
};
const zoomProps: ZoomableGroupProps = {
  center: [-100, 50],
  zoom: 3,
  maxZoom: 3,
  translateExtent: [[-300, -300], [500, 400]]
}
const composableMapProps: ComposableMapProps = {
  projection: "geoMercator",
  height: 600,
  width: 800
}

const RSMap = () => {

  return (
    <>
      <div style={{ maxWidth: "100%" }}>
        <ComposableMap {...composableMapProps}>
          {/* centering and zooming adjustments */}
          <ZoomableGroup {...zoomProps}>
            <Geographies geography={data} stroke="#FFFFFF">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo}
                    style={{ ...geoStyle }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
};

export default RSMap;