import React from "react";
import Spinner from "../src/components/Spinner/Spinner";
import AbsoluteWrapper from "./components/AbsoluteWrapper/AbsoluteWrapper";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import MapboxGlMapContextProvider from "./context/MapboxGlMapContext";

const MapboxGLMap = React.lazy(() =>
  import("./components/MapboxGLMap/MapboxGLMap")
);

function App() {
  return (
    <MapboxGlMapContextProvider>
      <AbsoluteWrapper>
        <React.Suspense fallback={<Spinner />}>
          <MapboxGLMap />
        </React.Suspense>
        <WeatherWidget />
      </AbsoluteWrapper>
    </MapboxGlMapContextProvider>
  );
}

export default App;
