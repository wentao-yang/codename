import React, {
  useState,
  useEffect
} from "react";
import {
  Spinner,
} from 'react-bootstrap';
import { ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";

function MapChart(props) {
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data
    csv("/sample.csv").then(counties => {
      setData(counties);
      setFetched(true);
    });
  }, []);

  // USA county map
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

  // Color scales
  const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

  if (fetched) {
    return (
      <div>
        <br/>
        <p>Map date: {props.dateValue.getMonth() + 1}/{props.dateValue.getDate()}/{props.dateValue.getFullYear()}</p>

        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const cur = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(cur ? cur.rate : "#EEE")}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    );
  } else { // Loading icon
    const loadStyle = { // Spinner style
      'top': '50%',
      'left': '50%',
    };

    return ( // Return loading screen
      <div style={loadStyle}>
        <br/><br/><br/><br/>
        <Spinner animation="border" variant="dark" />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default MapChart;
