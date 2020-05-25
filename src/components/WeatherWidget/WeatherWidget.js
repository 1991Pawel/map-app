import React, { useContext } from "react";
import styled from "../WeatherWidget/WeatherWidget.module.scss";
import { WeatherContext } from "../../context/WeatherContext";
import DashBoard from "./Dashboard";
import Form from "../Form/Form";

const WeatherWidget = () => {
  const { data } = useContext(WeatherContext);

  return (
    <>
      <div className={styled.wrapper}>
        {data && <DashBoard {...data} />}
        <Form />
      </div>
    </>
  );
};

export default WeatherWidget;
