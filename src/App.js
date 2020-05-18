import React from "react";
import MapboxGLMap from "./components/MapboxGLMap/MapboxGLMap";
import AbsoluteWrapper from "./components/AbsoluteWrapper/AbsoluteWrapper";

function App() {
  return (
    <AbsoluteWrapper>
      <MapboxGLMap />
      <p>lorem</p>
    </AbsoluteWrapper>
  );
}

export default App;
