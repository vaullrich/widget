import * as React from 'react';
import { useSelector } from 'react-redux';
import { EIcon } from 'src/icons';
import { getSvgIcon } from "src/common/utils/common";
import { selectors } from 'src/containers/home/store/selectors';
import Details from 'src/common/components/details';
import AtmosphereData from 'src/common/components/atmosphere';
import './Card.scss'

/** Информация о текущей погоде */
export const Card: React.FC = () => {
  const data = useSelector(selectors.weatherData);
  const { main, weather, name } = data;
  const currentWeather = weather?.[0]
  return (
    currentWeather ? 
    (
      <div className="card">
        <div className="city-name">{name}</div>
          <div className='info'>
            <img className='info__icon' src={getSvgIcon(currentWeather.icon)} alt=''></img>
            <AtmosphereData params={main} description={currentWeather.description} />
          </div>
          <Details items={[EIcon.CloudRain, EIcon.Drop, EIcon.Wind]} />
        </div>
    )
    : null
  )
}

export default Card;