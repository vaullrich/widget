import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "src/api";
import { ERequestType, IParams } from "src/common/types/common";
import { actions } from './slice';

export const getForecustData = createAsyncThunk(
  'fetchForecust',
  async (params: IParams, {dispatch}): Promise<void> => {
    const data = await getRequest(params, ERequestType.Forecast);
    if (data){
      dispatch(actions.set(data));
    }
  }
);