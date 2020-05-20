import React from "react";
import styled from "./Dashboard.module.scss";
import humidityIcon from "../../assets/humidity.svg";
import pressureIcon from "../../assets/presure.svg";

const Dashboard = React.memo(({ data }) => {
  const { name: city } = data;
  const { temp, humidity, pressure } = data.main;
  const { country } = data.sys;
  const { description, icon, main: weather } = data.weather[0];

  return (
    <div className={styled.wrapper}>
      <div className={styled.dashboard}>
        <div className={styled.dashboard__city}>
          {city}
          <span className={styled.dashboard__country}>{country}</span>
        </div>
        <div className={styled.dashboard__temp}>
          {parseInt(temp)}
          <sup className={styled.dashboard__degrees}>°C</sup>
        </div>
        <img
          className={styled.dashboard__icon}
          src={require(`../../assets/weather-icon/${icon}.svg`)}
          alt="weather icon"
        />
        <div className={styled.dashboard__weather}>{weather}</div>
        <div className={styled.dashboard__description}>{description}</div>
      </div>
      <div className={styled.extra}>
        <span className={styled.extra__pressure}>
          <img src={pressureIcon} alt="icon" />
          {pressure}
        </span>
        <span className={styled.extra__humidity}>
          <img src={humidityIcon} alt="icon" />
          {humidity}
        </span>
      </div>
    </div>
  );
});

export default Dashboard;
