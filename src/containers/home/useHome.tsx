import * as React from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { IParams } from "src/common/types/common";
import * as forecustThunks from 'src/common/components/summary/store/thunks';
import { selectors } from "./store/selectors";
import * as weatherThunks from './store/thunks';

const useHome = () => {
  const cityName = useAppSelector(selectors.name);
  const coord = useAppSelector(selectors.coord);
  const dispatch = useAppDispatch();

  const loadData = React.useCallback((params: IParams) => {
    dispatch(weatherThunks.getData(params))
    dispatch(forecustThunks.getForecustData(params)) 
  }, [dispatch]);
  
  return React.useMemo(() => ({cityName, loadData, coord})
  ,[cityName, loadData, coord]);
}

export default useHome;