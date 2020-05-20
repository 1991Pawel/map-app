import React from "react";
import MapboxGLMap from "./components/MapboxGLMap/MapboxGLMap";
import AbsoluteWrapper from "./components/AbsoluteWrapper/AbsoluteWrapper";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import MapboxGlMapContextProvider from "./context/MapboxGlMapContext";

function App() {
  return (
    <MapboxGlMapContextProvider>
      <AbsoluteWrapper>
        <MapboxGLMap />
        <WeatherWidget />
      </AbsoluteWrapper>
    </MapboxGlMapContextProvider>
  );
}

export default App;
