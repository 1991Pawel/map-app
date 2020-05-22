import React, { useState, useContext } from "react";
import styled from "../WeatherWidget/WeatherWidget.module.scss";
import { MapboxGlMapContext } from "../../context/MapboxGlMapContext";
import DashBoard from "./Dashboard";
import searchSvg from "../../assets/search.svg";
import { getWeather } from "../../api/fetch";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const { viewport, setViewport } = useContext(MapboxGlMapContext);
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const closeHandler = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log(styled);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await getWeather(city);
    if (data.cod !== 200) {
      setError(true);
    } else {
      setWeather(data);
      setError(false);
    }
    setCity("");
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
<<<<<<< HEAD
    <>
      <div onClick={closeHandler} className={styled.btn}>
        {isOpen ? "x" : "-"}
      </div>
      <div className={isOpen ? styled.wrapper : styled.wrapper__active}>
        <form
          onSubmit={submitHandler}
          className={isOpen ? styled.form : styled.form__active}
        >
          <p>{error && "Wystapił błąd"}</p>
          {weatherData && <DashBoard {...weatherData} />}
          <div className={styled.form__group}>
            <input
              onChange={onChangeHandler}
              value={city}
              className={styled.form__input}
              type="text"
              placeholder="Search for a city"
            />
=======
    <div className={styled.wrapper}>
      <form onSubmit={submitHandler} className={styled.form}>
        {error && <p className={styled.error}>Error</p>}
        {weatherData && <DashBoard {...weatherData} />}
        <div className={styled.form__group}>
          <input
            onChange={onChangeHandler}
            value={city}
            className={styled.form__input}
            type="text"
            placeholder="Search for a city"
          />
>>>>>>> 1156e5182d760da4bfeb04d09a0c11e6a5163ee0

            <button type="submit" className={styled.form__btn}>
              <img src={searchSvg} alt="search icon" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WeatherWidget;
