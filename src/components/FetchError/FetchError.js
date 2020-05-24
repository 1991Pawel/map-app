import React from "react";
import styled from "../FetchError/FetchError.module.scss";

const FetchError = ({ message }) => (
  <div className={styled.error}>{message}</div>
);

export default FetchError;
