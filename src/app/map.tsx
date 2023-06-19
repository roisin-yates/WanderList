'use client'

import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

const Map = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null)
  const [clickedCountry, setClickedCountry] = useState(null)

  const handleMouseEnter = (geo: any) => {
    setHoveredCountry(geo.properties.name)
  }
  const handleMouseLeave = () => {
    setHoveredCountry(null)
  }
  const handleClick = (geo: any) => {
    clickedCountry === geo.properties.name
      ? setClickedCountry(null)
      : setClickedCountry(geo.properties.name)
  }

  return (
    <>
      <h3 className="text-slate-200">
        {hoveredCountry ? hoveredCountry : 'Choose a country'}
      </h3>
      <ComposableMap className="w-2/3 bg-slate-800">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => handleMouseEnter(geo)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => handleClick(geo)}
                style={{
                  default: {
                    fill:
                      hoveredCountry === geo.properties.name ||
                      clickedCountry === geo.properties.name
                        ? '#718096'
                        : '#ECEFF1',
                    outline: 'none',
                  },
                  hover: {
                    fill: '#718096',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#718096',
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
