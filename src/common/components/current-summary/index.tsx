import * as React from "react"
import Summary from "src/common/components/summary"
import { ESummaryMode } from "src/common/types/common"

/** Информация о дневной погоде */
export const CurrentSummary: React.FC = () => {
  return (
    <div className="current-summary">
      <Summary title="Сегодня" mode={ESummaryMode.Atmosphere} count={6} itemStep={1} /> 
      <Summary title="На ближайшие часы" mode={ESummaryMode.Hourly} count={6} itemStep={1} /> 
  </div>
  )
}

export default CurrentSummary;