import moment from "moment";
import 'moment/locale/ru';
import * as  React from "react";
import classNames from "classnames";
import { useAppSelector } from "src/hooks";
import { ESummaryMode } from "src/common/types/common"
import HourlyDisplay from "src/common/components/hourly-display";
import Details from "src/common/components/details";
import DayPill from "src/common/components/day-pill";
import { EIcon } from "src/icons/index";
import { selectors } from "./store/selectors";
import './Summary.scss'

// типы выводимой информации о погоде
const atmosphereTypes = [EIcon.Thermometer, EIcon.CloudRain, EIcon.Wind, EIcon.SunRise, EIcon.SunSet, EIcon.Drop];

interface IOwnProps {
  /** Заголовок */
  title?: string;
  /** Режим вывода информации */
  mode: ESummaryMode,
  // ввиду оганичения API
  /** Шаг перебора данных, полученного из API */
  itemStep: number,
  /** Количество погодных данных, которое нужно получить из API */
  count?: number,
  /** Пользовательский класс */
  className?: string;
}

/** Обобщенная информация о погоде в зависимости от типа выводимой информации.
 *  Часовые, дневные данные и данные об атмосфере.
 */
export const Summary: React.FC<IOwnProps> = ({title, mode, itemStep, count }) => {
  let items = useAppSelector(selectors.items);

  const renderData = React.useMemo((): JSX.Element => {
    const details: JSX.Element[] = [];
    if (items) {    
      const itemCount = count && items.length >= count ? count : items.length;

      for (let index = 0; index < itemCount; index += itemStep) {
        const item = items[index];
        const elem = mode === ESummaryMode.Days
        // дневные данные
          ? <DayPill 
              key={item.dt}
              icon={item.weather?.[0].icon ?? ''}
              tempMax={item.main?.temp_max}
              tempMim={item.main?.temp_min}
              dt={item.dt_txt}
            />
            // часовые данные
          : <HourlyDisplay
              key={index}
              icon={item.weather?.[0].icon ?? ''}
              dt={item.dt_txt}
              temperature={item.main?.temp}
            />
        details.push(elem);
      }
    }
    return (
      <div className="summary__content">
        {details}
      </div>
    )
  }, [items, mode, count, itemStep]);

    const renderTpl = () => {
      switch(mode) {
        case ESummaryMode.Atmosphere:
          return <Details items={atmosphereTypes} withText />
        default:
          return renderData
      }
    }

  const clsNames = classNames('summary', `summary__${mode}`);
  
  return (
    <div className={clsNames}>
      {mode !== ESummaryMode.Days && 
      <div className='summary__info'>
        <div className="today">{title}</div>
        <div className="date">
          {moment(items?.[0].dt).format('DD MMMM')}
        </div>
      </div>
      }
      {renderTpl()}
    </div>
  );
}

export default Summary;
