import React, { useState, useContext } from "react";
import searchSvg from "../../assets/search.svg";
import { MapboxGlMapContext } from "../../context/MapboxGlMapContext";
import { WeatherContext } from "../../context/WeatherContext";
import FetchError from "../FetchError/FetchError";

import styled from "../Form/Form.module.scss";
import { getWeather } from "../../api/fetch";

const Form = () => {
  const [city, setCity] = useState("");
  const { viewport, setViewport } = useContext(MapboxGlMapContext);
  const { setData, setLoading } = useContext(WeatherContext);
  const [error, setError] = useState(false);

  const setWeather = (data) => {
    setViewport({
      ...viewport,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    });
    setData({
      data,
    });
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await getWeather(city);

    if (data.cod !== 200) {
      setError(data);
      console.log(data);
    } else {
      setWeather(data);
      setError(false);
    }
    setLoading(false);
    setCity("");
  };

  return (
    <form onSubmit={submitHandler} className={styled.form}>
      {error && <FetchError {...error} />}
      <div className={styled.form__group}>
        <input
          name="city"
          autoFocus
          onChange={onChangeHandler}
          value={city}
          className={styled.form__input}
          type="text"
          placeholder="Search for a city"
          autoComplete="off"
        />
        <button type="submit" className={styled.form__btn}>
          <img src={searchSvg} alt="search icon" />
        </button>
      </div>
    </form>
  );
};

export default Form;
