import * as React from "react";
import moment from 'moment';
import 'moment/locale/ru';
import { getSvgIcon, getWeekDay } from "src/common/utils/common";
import './DayPill.scss'; 


interface IProps {
  /** Время unix */
  dt: number | string | undefined;
  /** Минимальная температура */
  tempMim: number | undefined;
  /** Максимальная температура */
  tempMax: number | undefined;
  /** Погода */
  icon: string;
}

/** Элемент для вывода инфомации о температуре */
export const DayPill: React.FC<IProps> = (props) => {
  const { dt: time, tempMax, tempMim, icon } = props;
  const date = moment(time);
  return (
    <div className='day-pill'>
      <div className='day-pill__day-week'>{getWeekDay(date.day())}</div>
      <div className='day-pill__time'>{date.format('DD/MM')}</div>
      <img src={getSvgIcon(icon)} alt="" />
      <div className='day-pill__temp'>{`${tempMax}°/${tempMim}°`}</div>
    </div>
  )
}

export default DayPill;
