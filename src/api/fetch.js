import { REACT_APP_WEATHER_API_KEY } from "../api/apiKey";
export const getWeather = async (city) => {
  try {
    const base = `https://api.openweathermap.org/data/2.5/weather?`;
    const query = `q=${city}&units=metric&appid=${REACT_APP_WEATHER_API_KEY}`;
    const request = await fetch(base + query);
    const data = await request.json();
    return data;
  } catch (err) {
    return err;
  }
};
