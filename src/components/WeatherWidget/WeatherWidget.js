import React, { useState, useContext } from "react";
import styled from "../WeatherWidget/WeatherWidget.module.scss";
import { MapboxGlMapContext } from "../../context/MapboxGlMapContext";
import DashBoard from "./Dashboard";
import searchSvg from "../../assets/search.svg";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const { viewport, setViewport } = useContext(MapboxGlMapContext);
  const [weatherData, setWeatherData] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (city) {
      const data = await getWeather(city);
      setViewport({
        ...viewport,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
      });
      setWeatherData({
        data,
      });
      setCity("");
    }
  };

  const getWeather = async (city) => {
    try {
      const base = `https://api.openweathermap.org/data/2.5/weather?`;
      const query = `q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const request = await fetch(base + query);
      const data = await request.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const setWeather = (data) => {
    setViewport({
      ...viewport,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    });
    setWeatherData({
      data,
    });
  };

  return (
    <div className={styled.wrapper}>
      <form onSubmit={submitHandler} className={styled.form}>
        {weatherData && <DashBoard {...weatherData} />}
        <div className={styled.form__group}>
          <input
            onChange={onChangeHandler}
            value={city}
            className={styled.form__input}
            type="text"
            placeholder="Search for a city"
          />

          <button type="submit" className={styled.form__btn}>
            <img src={searchSvg} alt="search icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeatherWidget;
