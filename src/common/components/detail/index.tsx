import * as React from "react";
import classNames from "classnames";
import { IAtmosphere } from "src/common/types/common";
import { getSvgIcon } from "src/common/utils/common";
import './Detail.scss';

export interface IOwnProps {
  withText?: boolean,
}
/** "Элемент для вывода информации об атмосфере" */
export const Detail: React.FC<(IAtmosphere & IOwnProps)> = ({icon, text, data, withText }) => {
  const classes = classNames({
    [`detail_inline`]: !withText,
    [`detail_block`]: withText,
  });

  return (
    <div className={classes}>
      <img src={getSvgIcon(icon)} alt="" />
      { withText && <div className={`${classes}__text`}>{text}</div> }
      <div className={`${classes}__data`}>{data}</div>
    </div>
  )
}

export default Detail;
