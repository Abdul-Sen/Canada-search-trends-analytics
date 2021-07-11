import * as React from "react";
import {Province, DateBucket, DateQuery} from '../../typings/DateBucket';
import {AccordianContext} from '../../context/AccordianContext';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  ZoomableGroupProps,
  ComposableMapProps,
  Marker,
  Point
} from "react-simple-maps";

import * as data from './canadaTested.geojson';
const dates: Array<DateBucket> = require('../../../public/content/dates.json');

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

  // get the state context for accordian state
  const {accordianState}  = React.useContext<AccordianContextType>(AccordianContext)

  React.useEffect(() => {
    renderUpdate(dates.length - accordianState.counterTicks);
  },[accordianState.counterTicks]);

  const renderUpdate = (index: number)=>{
    if(dates[index] != undefined)
    {
      setCurrentDateBucket(() => dates[index]);
    }
  }

  const [currentDateBucket, setCurrentDateBucket] = React.useState(dates[0]);

  // Todo - dis needs to be optimized
  const MarkerCoordinate = (province: Province) : Point =>  {
    switch (province) {
      case Province.AB:
        return [-114.856456, 56.448863];
      case Province.BC:
        return [-125.272325, 55.177216];
      case Province.MA:
        return [-98.057204, 55.971268];
      case Province.NB:
        return [-66.398948, 46.438051];
      case Province.NL:
        return [-62.627126, 53.792699];
      case Province.ON:
        return [-88.087716, 52.155468];
      case Province.QC:
        return [-73.069233, 50.167852];
      case Province.SK:
        return [-105.843923, 55.871736];
      default:
        return [0,0];
    }
  }
  
  const RenderGeographies = ({ geographies }: any) => {

    return geographies.map((geo: any) => {
    
    return <Geography key={geo.rsmKey} name={geo.properties.name} geography={geo} style={{ ...geoStyle }} className="geography" >        
      </Geography>
    })
  }
  return (
    <>
      <div style={{ maxWidth: "100%", height: "100%" }}>
        <ComposableMap {...composableMapProps} style={{ width: "100%", height: "100%" }}>
          <ZoomableGroup {...zoomProps}>
            <Geographies geography={data} stroke="#949494" strokeWidth={0.2}>
              {RenderGeographies}
              
            </Geographies>
            {currentDateBucket.data.map((proviceData, index) => {
                
                return (
                  <Marker coordinates={MarkerCoordinate(proviceData.province)} fill="#777" key={index}>
                  <text textAnchor="middle" fill="DarkBlue" fontSize={3}>
                    {proviceData.query}
                  </text>
                </Marker>
                )
              })}
            <React.Fragment>
              
            </React.Fragment>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
};

export default RSMap;