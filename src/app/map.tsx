'use client'

import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

const Map = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null)

  const handleMouseEnter = (geo) => {
    setHoveredCountry(geo.properties.name)
  }

  return (
    <>
      <h3>{hoveredCountry}</h3>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => handleMouseEnter(geo)}
                style={{
                  default: {
                    fill:
                      hoveredCountry === geo.properties.name
                        ? '#FF0000'
                        : '#ECEFF1',
                    outline: 'none',
                  },
                  hover: {
                    fill: '#FF0000',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#FF0000',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  )
}

export default Map
