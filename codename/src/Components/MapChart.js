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

function MapChart() {
  const [fetched, setFetched] = useState(false);

  // Base map
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

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

  const [data, setData] = useState([]);

  useEffect(() => {
    // Data
    csv("/sample.csv").then(counties => {
      setData(counties);
      setFetched(true);
    });
  }, []);
  if (fetched) {
    return (
      <div>
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
  } else { // Loading screen
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
