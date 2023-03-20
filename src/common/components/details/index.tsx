import * as React from "react";
import { EIcon } from "src/icons";
import { useAppSelector } from "src/hooks";
import { IAtmosphere } from "src/common/types/common";
import Detail from "src/common/components/detail";
import { selectors } from "src/containers/home/store/selectors";
import './Details.scss';

interface IOwnProps {
  items: EIcon[],
  withText?: boolean,
}

const getTime = (dt: number | undefined) => {
  if (!dt) return '-';
  const date = new Date(dt*1000);
  return `${date.getHours()}:${date.getMinutes()}`
}

/** Информация об основных показаниях погоды */
export const Details: React.FC<IOwnProps> = React.memo(({ items, withText }) => {
  const data = useAppSelector(selectors.weatherData);
  const { wind, clouds, main, sys } = data;

  const detailDataMap: Record<string, IAtmosphere | undefined> = React.useMemo(() => ({
    [EIcon.Wind]: { icon: EIcon.Wind, text: 'Ветер', data: `${wind?.speed} м/с` },
    [EIcon.Drop]: {icon: EIcon.Drop, text: 'Влажность', data: `${main?.humidity} %`},
    [EIcon.CloudRain]: {icon: EIcon.CloudRain, text: 'Влажность', data: `${clouds?.all} %` },
    [EIcon.SunRise]: { icon: EIcon.SunRise, text: 'Восход', data: getTime(sys?.sunrise) },
    [EIcon.SunSet]: { icon: EIcon.SunSet, text: 'Закат', data: getTime(sys?.sunset) },
    [EIcon.Thermometer]: { icon: EIcon.Thermometer, text: 'мин/макс', data: `${main?.temp_min}°/${main?.temp_max}°` }
  }), [clouds?.all, main?.humidity, main?.temp_max, main?.temp_min, sys?.sunrise, sys?.sunset, wind?.speed]);


  return <div className="details">
      {
      Object.values(items).map((item, index) => 
        <Detail key={index} {...detailDataMap[item] as IAtmosphere} withText={withText} />
        )
      }
    </div>;
})

export default Details;
