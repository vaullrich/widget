import { getCityParams } from "src/common/utils/common";
import { ERequestType, IParams } from "src/common/types/common"
import { API_KEY, API_MAIN_PATH } from "src/common/constants/constants";

export const getRequest = async (params: IParams, type: ERequestType): Promise<any> => {
  const paramString = getCityParams(params);
  if (!paramString) return null;
  const path = `${API_MAIN_PATH}${type}?${paramString}&units=metric&appid=${API_KEY}&lang=ru`;
  const response = await fetch(path);
  if (response.ok) {
    const res = await response.json();
     return res;
  } else {
    return undefined
  }
};
