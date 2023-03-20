import moment from "moment";
import * as React from "react";
import { getSvgIcon } from "src/common/utils/common";
import './HourlyDisplay.scss';

interface IProps {
  /** Температура */
  temperature: number | undefined;
  /** Дата в unix */
  dt: string | number | undefined;
  /** Иконка */
  icon: string;
}

/** Эдемент вывода часовой температуры */
export const HourlyDisplay: React.FC<IProps> = ({temperature, dt, icon}) => {
  const time = moment(dt).format('HH:mm')
  const temp = temperature ? `${temperature}°` : '-';
  return (
    <div className='hourly-info'>
      <div className='hourly-info__time'>{time}</div>
      <img src={getSvgIcon(icon)} alt="" />
      <div className='hourly-info__temp'>{temp}</div>
    </div>
  )
}

export default HourlyDisplay;
