import React, { createContext, useState } from "react";

export const MapboxGlMapContext = createContext();

const MapboxGlMapContextProvider = ({ children }) => {
  const [viewport, setViewport] = useState({
    latitude: 40.4211,
    longitude: -75.6903,
    width: "100%",
    height: "100%",
    zoom: 6,
  });

  return (
    <MapboxGlMapContext.Provider
      value={{
        viewport,
        setViewport,
      }}
    >
      {children}
    </MapboxGlMapContext.Provider>
  );
};

export default MapboxGlMapContextProvider;
