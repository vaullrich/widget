import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForecust } from "src/common/types/common";

const initialState: IForecust = {};

export const {actions, reducer} = createSlice({
  name: 'forecust',
  initialState,
  reducers: {
    set: (state: IForecust, { payload }: PayloadAction<IForecust>) => {
      return payload;
    },
    clear() {
      return initialState;
    },
  },
});