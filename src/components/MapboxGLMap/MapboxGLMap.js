import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MapboxGLMap = () => {
  const mapStyle = "mapbox://styles/virtuozoo/ckacdjkn43i8u1is4hryblbxd";

  const [viewport, setViewport] = useState({
    latitude: 40.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactMapGL
      mapStyle={mapStyle}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_API_KEY}
      {...viewport}
    >
      <Marker
        latitude={45.42}
        longitude={-75.69}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div className="marker">You are here</div>
      </Marker>
    </ReactMapGL>
  );
};

export default MapboxGLMap;
