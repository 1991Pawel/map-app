import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <WeatherContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
