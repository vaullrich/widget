import * as React from "react";
import moment from "moment";
import 'moment/locale/ru';
import { IWeatherData } from "src/common/types/common";
import AtmosphereData from "src/common/components/atmosphere";
import { getSvgIcon } from "src/common/utils/common";
import { EIcon } from "src/icons";
import './Preview.scss';

interface IOwnProps {
  data: IWeatherData
}

/** Отображение предварительной информации о погоде */
export const Preview: React.FC<IOwnProps> = ({data}) => {
const {main, weather, name, sys, dt} = data;
const currentWeather = weather?.[0];
  return (
    <>
      <img className='preview__icon' src={getSvgIcon(currentWeather?.icon || EIcon.Empty)} alt=''></img>
      <div className="preview">
        <div className="preview__name">
          <div>{`${name}, ${sys?.country}`}</div>
          <div>{moment((dt as number)*1000).format('HH:mm')}</div>
        </div>
        <AtmosphereData params={main} description={currentWeather?.description || '-'} />  
      </div>
    </>
  )
}

export default Preview;
