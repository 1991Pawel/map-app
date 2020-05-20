import React from "react";
import MapboxGLMap from "./components/MapboxGLMap/MapboxGLMap";
import AbsoluteWrapper from "./components/AbsoluteWrapper/AbsoluteWrapper";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";

function App() {
  return (
    <AbsoluteWrapper>
      <MapboxGLMap />
      <WeatherWidget />
    </AbsoluteWrapper>
  );
}

export default App;
