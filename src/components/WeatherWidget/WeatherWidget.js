import React, { useState } from "react";
import styled from "../WeatherWidget/WeatherWidget.module.scss";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const onChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(city);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className={styled.form}>
        <input
          onChange={onChangeHandler}
          value={city}
          className={styled.form__input}
          type="text"
        />
      </form>
    </div>
  );
};

export default WeatherWidget;
