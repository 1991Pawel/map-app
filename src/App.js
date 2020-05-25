import React from "react";
import Spinner from "../src/components/Spinner/Spinner";
import AbsoluteWrapper from "./components/AbsoluteWrapper/AbsoluteWrapper";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import MapboxGlMapContextProvider from "./context/MapboxGlMapContext";
import WeatherContext from "./context/WeatherContext";
const MapboxGLMap = React.lazy(() =>
  import("./components/MapboxGLMap/MapboxGLMap")
);

function App() {
  return (
    <MapboxGlMapContextProvider>
      <WeatherContext>
        <AbsoluteWrapper>
          <React.Suspense fallback={<Spinner />}>
            <MapboxGLMap />
          </React.Suspense>
          <WeatherWidget />
        </AbsoluteWrapper>
      </WeatherContext>
    </MapboxGlMapContextProvider>
  );
}

export default App;
