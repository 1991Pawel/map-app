import React, { useContext, useState } from "react";
import styled from "../WeatherWidget/WeatherWidget.module.scss";
import { WeatherContext } from "../../context/WeatherContext";
import DashBoard from "./Dashboard";
import Form from "../Form/Form";

const WeatherWidget = () => {
  const { data } = useContext(WeatherContext);
  const [isOpen, setIsOpen] = useState(true);
  const closeHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className={styled.wrapper}>
        {data && <DashBoard onClick={closeHandler} isOpen={isOpen} {...data} />}
        <Form />
      </div>
    </>
  );
};

export default WeatherWidget;
