import { IParams } from "src/common/types/common";
import { EIcon, iconMap } from "src/icons";

/** Получение параметров о городе - название или координаты */
export const getCityParams = (params: IParams): string | undefined => {
  const {city, lat, lon} = params;
  if (!city && !lon && !lat) return undefined;
  return lat && lon ? `lat=${lat}&lon=${lon}` : `q=${city}`;
}

/** Дни недели */
export const shortDayOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

// получения дня недели
export const getWeekDay = (day: number) => shortDayOfWeek[day];
// получения svg иконки
export const getSvgIcon = (icon: EIcon | string) => iconMap[icon];