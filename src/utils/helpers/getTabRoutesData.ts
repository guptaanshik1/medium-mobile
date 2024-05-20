import {getCapitalizedString} from './getCapitalizedString';

export interface ITabRoutesData {
  key: string;
  title: string;
}

export const getTabRoutesData = (
  apiData: Array<string>,
): Array<ITabRoutesData> => {
  let routesData: Array<ITabRoutesData> = [];

  routesData = apiData.map(data => ({
    key: data,
    title: getCapitalizedString(data),
  }));

  return routesData;
};
