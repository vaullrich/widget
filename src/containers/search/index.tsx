import * as React from 'react';
import { NavLink } from 'react-router-dom';
import  * as api from 'src/api';
import  {actions as dateSlice} from 'src/containers/home/store/slice';
import Input from 'src/common/components/input';
import { ERequestType, IWeatherData } from 'src/common/types/common';
import { useAppDispatch } from 'src/hooks';
import Preview from 'src/common/components/preview/Preview';
import EmptyData from 'src/common/components/empty-data/EmptyData';
import './Search.scss';

export const Search: React.FC = () => {
  const [findedCites, setFindedCites] = React.useState<IWeatherData[]>([]);
  const [cityName, setCityName] = React.useState<string>();
  const dispatch = useAppDispatch();

  const onClick = React.useCallback((value: string | undefined) => {
    dispatch(dateSlice.setName(value as string));
  }, [dispatch]);

  const items = React.useMemo(
    (): JSX.Element[] => {
      if (!cityName) return [];
      let res;
      if (findedCites.length > 0) {
        res = findedCites.map(
          (data: IWeatherData, index): JSX.Element => (
            <NavLink key={index} to={`/home/${data.coord?.lat}/${data.coord?.lon}`} onClick={() => onClick(data.name)}>
              <Preview data={data} />
            </NavLink>
          )
        )
      } else {
        res = (
          [
            <EmptyData key={0} />
          ]
        )     
      }
      return res;
    },
    [cityName, findedCites, onClick],
  );

  const onValueBlur = React.useCallback(async (value: string) => {
    const responce = await api.getRequest({city: value}, ERequestType.Find);
    if (responce.code !== '200') {
      setCityName(value);
    }
    setFindedCites(responce.list as IWeatherData[]);
  },[]);

  return (
    <div className='search-content'>
      <Input placeholder='Введите название города (не менне 3-x символов)...' onValueBlur={onValueBlur} />
      <div className='search-items'>
        {items}
      </div>
    </div>
  )
}
export default Search;