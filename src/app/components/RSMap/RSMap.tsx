import * as React from "react";
import { Province, DateBucket, DateQuery } from '../../typings/DateBucket';
import { AccordianContext } from '../../context/AccordianContext';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  ZoomableGroupProps,
  ComposableMapProps,
  Marker,
  Point,
  Annotation
} from "react-simple-maps";
import { ThemeContext } from "../../context/ThemeContext";
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

  // RSM style prop
  const geoStyle = {
    default: {
      fill: "#c5efff",
      outline: "none",
    },
    hover: {
      fill: "#F53",
      outline: "none",
    },
    pressed: {
      fill: "#E42",
      outline: "none"
    }
  };

  // get the state context for accordian state
  const { accordianState } = React.useContext<AccordianContextType>(AccordianContext);
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

  React.useEffect(() => {
    renderUpdate(dates.length - accordianState.counterTicks);
  }, [accordianState.counterTicks]);

  const renderUpdate = (index: number) => {
    if (dates[index] != undefined) {
      setCurrentDateBucket(() => dates[index]);
    }
  }

  const [currentDateBucket, setCurrentDateBucket] = React.useState(dates[0]);

  // Todo - dis needs to be optimized
  const MarkerCoordinate = (province: Province): Point => {
    switch (province) {
      case Province.AB:
        return [-114.856456, 56.448863];
      case Province.BC:
        return [-125.272325, 55.177216];
      case Province.MA:
        return [-96.8, 56.448863];
      case Province.NB:
        return [-66.398948, 46.438051];
      case Province.NL:
        return [-62.627126, 53.792699];
      case Province.ON:
        return [-88.087716, 52.155468];
      case Province.QC:
        return [-73.069233, 50.167852];
      case Province.SK:
        return [-105.843923, 55.177216];
      case Province.NWT:
        return [-118.724063, 63.750654];
      case Province.YT:
        return [-136.320388, 62.258023];
      case Province.NU:
        return [-97.838705, 65.374773];
      default:
        return [0, 0];
    }
  }

  const GetColor = (province: Province) => {

    if(FilterCheck(province))
    {
      let dq: DateQuery | undefined = currentDateBucket.data.find((val: DateQuery) => {
        if (val.province == province) {
          return true;
        }
      });
      return `#` + (theme.AppTheme == "Light" ? dq?.lightColor : dq?.darkColor);  
    }
    else {
      return theme.AppTheme == "Light"? geoStyle.default.fill : "#9e9e9e"; // dis hardcoded yuck
    }
  }
  
  const RenderGeographies = ({ geographies }: any) => {
    return geographies.map((geo: any) => {
      return <Geography key={geo.rsmKey} name={geo.properties.name} geography={geo} style={{ ...geoStyle, default: { fill: `${ GetColor(geo.properties.name as Province)}`, outline: "none" } }} className="geography" >
      </Geography>
    })
  }

  /**
   * checks if current data point is allowed to render based on accordian filter
   * @param province {{Province}} 
   */
  const FilterCheck = (province: Province) : boolean => {
    
    // check if province is not one of which that do not have data
    if([Province.NWT, Province.YT, Province.NU].includes(province))
    {
      return false;
    }

    let index : number = accordianState.province.findIndex((val : OptionType, ind : number) => {
      if(val.value as Province == province || val.value == "ALL")
      {
        return true;
      }
    });

    return index == -1?  false : true;
  }

  return (
    <>
      <div style={{ maxWidth: "100%", height: "100%" }}>
        <ComposableMap {...composableMapProps} style={{ width: "100%", height: "100%" }}>
          <ZoomableGroup {...zoomProps}>
            <Geographies geography={data} className={"rsm-geographies"} strokeWidth={0.2}>
              {RenderGeographies}
            </Geographies>

            {[Province.NWT, Province.YT, Province.NU].map((province: Province,index : number) => {
              return (
                <Marker coordinates={MarkerCoordinate(province)} fill="#777" key={index}>
                  <text textAnchor="middle" fontSize={3} className="map-text">
                    {"No Data Available"}
                  </text>
                </Marker>
              );
            })}

            {currentDateBucket.data.map((proviceData, index) => {
              if (proviceData.province == Province.NB) {

                return (
                  FilterCheck(proviceData.province) &&  <Annotation
                    subject={MarkerCoordinate(Province.NB)}
                    dx={-3}
                    dy={13}
                    curve={-1}
                    connectorProps={{
                      stroke: "black",
                      strokeWidth: 0.3,
                      strokeLinecap: "round",

                    }}>
                    <text x="6" y="3" textAnchor="end" fontSize={3} alignmentBaseline="middle" className="map-text">
                      {proviceData.query}
                    </text>
                  </Annotation>
                )
              }
              return (
               FilterCheck(proviceData.province) && <Marker coordinates={MarkerCoordinate(proviceData.province)} fill="#777" key={index}>
                <text textAnchor="middle" className="map-text" fontSize={3}>
                  {proviceData.query}
                </text>
              </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
};

export default RSMap;