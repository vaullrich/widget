import { EIcon } from "src/icons";

/** Параметры для работы с API */
export interface IParams extends ICoord {
  /** Название города */
  city?: string | undefined;
}

/** Вид данных об атмосфере  */
export enum EAtmosphereType {
  /** Температура */
  Temperature = 'Temperature',
  /** Облачность */
  Cloud = 'Cloud',
  /** Ветер */
  Wind = 'Wind',
  /** Восход */
  SunRise = 'SunRise',
  /** Закат */
  SunSet = 'SunSet',
  /** Влажность */
  Drop = 'Drop',
}

/** Режим представления информации */
export enum ESummaryMode {
  /** По часам */
  Hourly = 'hourly',
  /** Данные атмосферы */
  Atmosphere = 'atmosphere',
  /** Дневные данные */
  Days = 'days',
}

/** Интерфейс отображения данных по атмосфере */
export interface IAtmosphere {
  /** Иконка */
  icon: EIcon;
  /** Описание данных */
  text?: string | number;
  /** Данные */
  data: string | number | undefined;
}

/** Интерфейс ответа от API при поиске города */
export interface IResponce {
  /** Код ответа*/
  cod: string;
  /** Количество записей */
  count: number;
  /** Сообщение */
  message: string;
  /** Список данных о погоде по найденным городам */
  list: IWeatherData[];
}

/** Географические координаты */
export interface ICoord {
  /** Долгота */
  lon?: number | undefined;
  /** Широта */
  lat?: number | undefined;
}

/** Погодные условия */
export interface IWeather {
  /** Идетнификатор */
  id: number;
  /** Группа погодных параметров (дождь, снег и т.д.)*/
  main: string;
  /** Описание погодных условий */
  description: string;
  /** Идентификатор иконки */
  icon: string;
}

/** Основные данные */
export interface IMain {
  /** Температура */
  temp: number;
  /** Ощущение температуры */
  feels_like: number;
  /** Минимальная температура на данный момент */
  temp_min: number;
  /** Максимальная температура на данный момент */
  temp_max: number;
  /** Атмосферное давление */
  pressure: number;
  /** Влажность */
  humidity: number;
  /** Атмосферное давление на уровне моря, гПа */
  sea_level: number;
  /** Атмосферное давление на уровне земли, гПа */
  grnd_level: number;
}

/** Ветер */
export interface IWind {
  /** Скорость ветра*/
  speed: number;
  /** Направление ветра */
  deg: number;
  /** Порывы ветра */
  gust: number;
}

/** Облачность */
export interface IClouds {
  /** Облачность, % */
  all: number;
}

/** Дождь */
export interface IRain {
  /** Осадки за последний 1 час, мм */
  '1h'?: number;
  /** Осадки за последние 3 часа, мм */
  '3h'?: number;
}

/** Снег */
export interface ISnow {
  /** Осадки за последний 1 час, мм */
  '1h'?: number;
  /** Осадки за последние 3 часа, мм */
  '3h'?: number;
}

/** Облачность, % */
export interface IClouds {
  all: number;
}

/** Системные данные */
export interface ISys {
  /** Код страны (GB, JP и т. д.) */
  country?: string;
  /** Время восхода солнца, unix, UTC */
  sunrise?: number;
  /** Время заката, unix, UTC */
  sunset?: number;
}

/** Основные данные */
export interface IEntity {
    /** Идентификатор города */
    id?: number;
    /** Название города */
    name?: string;
}

/** Осадки */
export interface IPrecipitation {
  /** Время расчета данных, unix, UTC */
  dt?: number;
  /** Погодные условия */
  weather?: IWeather[];
  /** Остновные параметры */
  main?: IMain;
  /** Видимость, метр */
  visibility?: number;
  /** Ветер */
  wind?: IWind;
  /** Облачность */
  clouds?: IClouds;
  /** Дождь */
  rain?: IRain;
  /** Снег */
  snow?: ISnow;
}

/** Георгафическое положение */
export interface ILocation {
  /** Георафические координаты города */
  coord?: ICoord;
  /** Сдвиг в секундах от UTC */
  timezone?: number;
}

/** Данные о погода */
export interface IWeatherData extends IEntity, IPrecipitation, ILocation {
   /** Системные данные */
  sys?: ISys;
}

/** Часть суток */
export interface IPartOfDay {
  /** Часть суток (н - ночь, д - день) */
    pod: string;
}

/** Временные данные погоды */
export interface IForecustData extends IPrecipitation {
  /** Вероятность осадков */
  pop: number;
  /** Часть суток */
  sys: IPartOfDay;
  /** Дата в виде строки */
  dt_txt: string;
}

/** Город */
export interface ICity extends IEntity, ISys, ILocation {
  /** Население */
  population?: number;
}

/** Временные данные о погода */
export interface IForecust {
  /** Количество временных данных */
  cnt?: number;
  /** Список данных о погоде */
  list?: IForecustData[];
  /** Город */
  city?: ICity;
}

/** Тип запрашиваемых данных */
export enum ERequestType {
  /** поиск города */
  Find = 'find',
  /** Погода */
  Weather = 'weather',
  /** Прогноз погоды */
  Forecast = 'forecast',
}