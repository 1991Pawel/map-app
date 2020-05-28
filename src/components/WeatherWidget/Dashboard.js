import React, { useContext } from "react";
import styled from "./Dashboard.module.scss";
import humidityIcon from "../../assets/humidity.svg";
import pressureIcon from "../../assets/presure.svg";
import { useTransition, animated } from "react-spring";
import { WeatherContext } from "../../context/WeatherContext";
import Spinner from "../Spinner/Spinner";

const Dashboard = React.memo(({ data, isOpen, onClick }) => {
  const { loading } = useContext(WeatherContext);
  const { name: city } = data;
  const { temp, humidity, pressure } = data.main;
  const { country } = data.sys;
  const { description, icon, main: weather } = data.weather[0];
  const transitions = useTransition(city, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { display: "none" },
  });

  if (loading) {
    return (
      <div className={styled.dashboard__spinner}>
        <Spinner />
      </div>
    );
  }
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <div className={isOpen ? styled.wrapper : styled.wrapper__active}>
            <button
              onClick={onClick}
              className={isOpen ? styled.btn : styled.btn__active}
            >
              {isOpen ? "-" : "+"}
            </button>
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
        </animated.div>
      )
  );
});

export default Dashboard;
