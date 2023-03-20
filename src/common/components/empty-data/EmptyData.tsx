import * as React from "react"
import { getSvgIcon } from "src/common/utils/common"
import { EIcon } from "src/icons";

/** Нет данных */
export const EmptyData: React.FC = () => {
  const noData = 'Нет данных.';
  return (
    <div className="no-data">
      <img src={getSvgIcon(EIcon.Empty)} alt={noData} />
      <div>{noData}</div>
    </div>)
}

export default React.memo (EmptyData);