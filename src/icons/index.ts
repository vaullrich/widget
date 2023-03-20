import D01 from 'src/icons/svg/01d.svg';
import D02 from 'src/icons/svg/02d.svg';
import D03 from 'src/icons/svg/03d.svg';
import D04 from 'src/icons/svg/04d.svg';
import D09 from 'src/icons/svg/09d.svg';
import D10 from 'src/icons/svg/10d.svg';
import D11 from 'src/icons/svg/11d.svg';
import D13 from 'src/icons/svg/13d.svg';
import CloudRain from 'src/icons/svg/CloudRain.svg';
import Dotshreebold from 'src/icons/svg/Dots-three-bold.svg';
import Drop from 'src/icons/svg/Drop.svg';
import Empty from 'src/icons/svg/Empty.svg';
import Home from 'src/icons/svg/Home.svg';
import MagnifyingGlass from 'src/icons/svg/Magnifying-glass.svg';
import SunHorizon from 'src/icons/svg/SunHorizon.svg';
import Thermometer from 'src/icons/svg/Thermometer.svg';
import Wind from 'src/icons/svg/Wind.svg';

export const Icons = {
  CloudRain,
  D01,
  D02,
  D03,
  D04,
  D09,
  D10,
  D11,
  D13,
  Empty,
  Dotshreebold,
  Drop,
  Home,
  MagnifyingGlass,
  SunHorizon,
  Thermometer,
  Wind,
}

export enum EIcon {
  D01 = '01d',
  D02 = '02d',
  D03 = '03d',
  D04 = '04d',
  D09 = '09d',
  D10 = '10d',
  D11 = '11d',
  D13 = '13d',
  N01 = '01n',
  N02 = '02n',
  N03 = '03n',
  N04 = '04n',
  N09 = '09n',
  N10 = '10n',
  N11 = '11n',
  N13 = '13n',
  CloudRain = 'CloudRain',
  DotsHreeBold = 'DotsHreeBold',
  Drop = 'Drop',
  Empty = 'Empty',
  Home = 'Home',
  MagnifyingGlass = 'MagnifyingGlass',
  SunRise = 'SunRise',
  SunSet = 'SunSet',
  Thermometer = 'Thermometer',
  Wind = 'Wind',
}

export const iconMap: Record<EIcon | string , string> = {
  [EIcon.CloudRain]: Icons.CloudRain,
  [EIcon.D01]: Icons.D01,
  [EIcon.D02]: Icons.D02,
  [EIcon.D03]: Icons.D03,
  [EIcon.D04]: Icons.D04,
  [EIcon.D09]: Icons.D09,
  [EIcon.D10]: Icons.D10,
  [EIcon.D11]: Icons.D11,
  [EIcon.D13]: Icons.D13,
  [EIcon.DotsHreeBold]: Icons.Dotshreebold,
  [EIcon.Drop]: Icons.Drop,
  [EIcon.Empty]: Icons.Empty,
  [EIcon.Home]: Icons.Home,
  [EIcon.MagnifyingGlass]: Icons.MagnifyingGlass,
  [EIcon.N01]: Icons.D01,
  [EIcon.N02]: Icons.D02,
  [EIcon.N03]: Icons.D03,
  [EIcon.N04]: Icons.D04,
  [EIcon.N09]: Icons.D09,
  [EIcon.N10]: Icons.D10,
  [EIcon.N11]: Icons.D11,
  [EIcon.N13]: Icons.D13,
  [EIcon.SunRise]: Icons.SunHorizon,
  [EIcon.SunSet]: Icons.SunHorizon,
  [EIcon.Thermometer]: Icons.Thermometer,
  [EIcon.Wind]: Icons.Wind,
}
