import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as weatherReduser } from 'src/containers/home/store/slice';
import { reducer as feracustReduser } from 'src/common/components/summary/store/slice';

export const store = configureStore({
  reducer: {
    weather: weatherReduser,
    forecust: feracustReduser,
  },
});

export type Dispatch = typeof store.dispatch;
export type GlobalState = ReturnType<typeof store.getState>;
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  GlobalState,
  unknown,
  Action<string>
>;