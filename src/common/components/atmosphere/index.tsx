import * as React from "react";
import { IMain } from "src/common/types/common";

interface IOwnProps {
  params: IMain | undefined;
  description: string;
}

/** Информация о погоде и температуре */
export const AtmosphereData: React.FC<IOwnProps> = ({params, description}) => {
  return (
    <div className='current_info'>
      <div className='info__temperature'>{`${params?.temp}°`}</div>
      <div className='info__inner'>
        <div>{description}</div>
          <div className= 'info__temperatures'>
            <div>{`H: ${params?.temp_max}°`}</div>
            <div>{`L: ${params?.temp_min}°`}</div>
        </div>
      </div>
    </div>
  )
}

export default AtmosphereData;