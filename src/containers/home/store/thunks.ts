import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "src/api";
import { ERequestType, IParams, IWeatherData } from "src/common/types/common";
import { actions } from './slice';

export const getData = createAsyncThunk(
  'fetchWeatherData',
  async (params: IParams, {dispatch}): Promise<void> => {

    const responce: IWeatherData = await getRequest(params, ERequestType.Weather);
    if (responce) {
      dispatch(actions.set(responce));
    }
  }
);
