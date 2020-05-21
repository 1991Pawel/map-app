import React from "react";
import styled from "../AbsoluteWrapper/AbsoluteWrapper.module.scss";

const AbsoluteWrapper = ({ children }) => (
  <div className={styled.wrapper}>{children}</div>
);

export default AbsoluteWrapper;
