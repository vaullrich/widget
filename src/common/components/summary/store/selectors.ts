import { GlobalState } from 'src/store';

export const forecust = (state: GlobalState) => state.forecust;

export const name = (state: GlobalState) => forecust(state).city?.name;
export const items = (state: GlobalState) => forecust(state).list;

export const selectors = {
  forecust,
  name,
  items,
};
