import React, { useContext } from "react";
import styled from "../WeatherWidget/WeatherWidget.module.scss";
import { WeatherContext } from "../../context/WeatherContext";
import DashBoard from "./Dashboard";
import Form from "../Form/Form";
import Spinner from "../Spinner/Spinner";

const WeatherWidget = () => {
  const { data, loading } = useContext(WeatherContext);
  console.log(data);

  return (
    <>
      <div className={styled.wrapper}>
        {data && <DashBoard {...data} />}
        {loading && <Spinner />}
        <Form />
      </div>
    </>
  );
};

export default WeatherWidget;
