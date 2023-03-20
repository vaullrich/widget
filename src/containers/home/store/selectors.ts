import { GlobalState } from "src/store";

export const weatherData = (state: GlobalState) => state.weather;

export const name = (state: GlobalState) => weatherData(state).name;
export const coord = (state: GlobalState) => weatherData(state).coord;
export const weather = (state: GlobalState) => weatherData(state).weather;
export const currentWeather = (state: GlobalState) => weather(state)?.[0];
export const temperature = (state: GlobalState) => weatherData(state).main?.temp;
export const minTemperature = (state: GlobalState) => weatherData(state).main?.temp_min;
export const maxTemperature = (state: GlobalState) => weatherData(state).main?.temp_max;

export const selectors = {
  weatherData,
  name,
  coord,
  weather,
  currentWeather,
  temperature,
  minTemperature,
  maxTemperature
};
