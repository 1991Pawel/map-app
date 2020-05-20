import React from "react";
import styled from "../AbsoluteWrapper/AbsoluteWrapper.module.scss";
import MapboxGlMapContextProvider from "../../context/MapboxGlMapContext";

const AbsoluteWrapper = ({ children }) => (
  <MapboxGlMapContextProvider>
    <div className={styled.wrapper}>{children}</div>
  </MapboxGlMapContextProvider>
);

export default AbsoluteWrapper;
