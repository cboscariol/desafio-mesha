import { useContext } from "react";

import WeatherProvider from "../context/WeatherContext";

export default function useWeatherContext() {
  return useContext(WeatherProvider);
}