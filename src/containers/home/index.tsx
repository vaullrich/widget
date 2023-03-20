import * as React from "react";
import { useParams } from "react-router-dom";
import { ESummaryMode, IParams } from "src/common/types/common";
import { DELAY_MINUTES } from "src/common/constants/constants";
import Card from "src/common/components/card";
import Summary from "src/common/components/summary";
import CurrentSummary from "src/common/components/current-summary";
import useHome from "./useHome";
import './Home.scss';


export const Home: React.FC = () => {
  const { city, lat, lon} = useParams();
  const params: IParams = React.useMemo(() => {
    const numLat = parseFloat(lat as string);
    const numLon = parseFloat(lon as string);
    return ({
      city: city !== 'undefined' ? city : undefined,
      lat: !isNaN(numLat) ? numLat : undefined,
      lon: !isNaN(numLon) ? numLon : undefined,
    });
  }, [city, lat, lon]);

  const { cityName, loadData, coord } = useHome();

  React.useEffect(() => {
    const {city, lat, lon} = params;
    if ((city && city !== cityName) || (lat && lon && (lat !== coord?.lat || lon !== coord.lon)) ){
       loadData(params);
    } 

    // Запускаем таймер
    setInterval(() => loadData(params), DELAY_MINUTES * 60000);
  }, [cityName, coord?.lat, coord?.lon, loadData, params]);

  return (
    cityName ? 
    (
      <div className="home-content">
        <div className="day-weather">
          <Card />
          <CurrentSummary />
        </div>
        <Summary title="На ближайшие дни" mode={ESummaryMode.Days} itemStep={8} /> 
      </div>
    )
    : null
  )
}
export default React.memo(Home);