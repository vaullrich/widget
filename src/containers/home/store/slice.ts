import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeatherData } from "src/common/types/common";

const initialState: IWeatherData = {
};

export const {actions, reducer} = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    set: (state: IWeatherData, { payload }: PayloadAction<IWeatherData>) => {
      return payload;
    },
    setName: (state: IWeatherData, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    clear() {
      return initialState;
    },
  },
});