import * as React from 'react'
import { NavLink } from 'react-router-dom';
import { EIcon } from 'src/icons/index';
import { getSvgIcon } from 'src/common/utils/common';
import './NavigationLink.scss'

export interface IOwnProps {
icon: EIcon;
path: string;
}

/** Элемент навигации */
export const NavigationLink: React.FC<IOwnProps> = ({ icon, path }) => {
  return (
    <NavLink className="nav-link" to={path} >
      <img src={getSvgIcon(icon)} alt=""></img>
      <div className="round"></div>
    </NavLink>
  )
}
export default NavigationLink;
