import React, { useEffect, useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import styled from "../MapboxGLMap/MapboxGLMap.module.scss";
import { MapboxGlMapContext } from "../../context/MapboxGlMapContext";
import { REACT_APP_MAP_API_KEY } from "../../api/apiKey";

const MapboxGLMap = () => {
  const mapStyle = "mapbox://styles/virtuozoo/ckacdjkn43i8u1is4hryblbxd";
  const { viewport, setViewport } = useContext(MapboxGlMapContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport((viewport) => ({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactMapGL
      mapStyle={mapStyle}
      mapboxApiAccessToken={REACT_APP_MAP_API_KEY}
      {...viewport}
    >
      <Marker
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div className={styled.marker}></div>
        <div className={styled.pulse}></div>
      </Marker>
    </ReactMapGL>
  );
};

export default MapboxGLMap;
