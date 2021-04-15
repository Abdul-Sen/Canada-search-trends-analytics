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


const zoomProps: ZoomableGroupProps = {
  center: [-100, 50],
  zoom: 3,
  maxZoom: 10,
  translateExtent: [[-300, -300], [500, 400]]
}
const composableMapProps: ComposableMapProps = {
  projection: "geoMercator",
  id: "mapView"
}

const RSMap = () => {

// RSM props
const geoStyle = {
  default: {
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
  return (
    <>
      <div style={{ maxWidth: "100%", height:"100%" }}>
        <ComposableMap {...composableMapProps} style={{ width: "100%", height: "100%"}}>
          {/* centering and zooming adjustments */}
          <ZoomableGroup {...zoomProps}>
            <Geographies geography={data} stroke="#949494" strokeWidth={0.2}> 
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo}
                    style={{ ...geoStyle }}
                    className="geography"
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