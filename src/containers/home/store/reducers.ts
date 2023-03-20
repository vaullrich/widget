import { combineReducers } from 'redux';
import { reducer as feracustReduser } from 'src/common/components/summary/store/slice';
import { reducer as weatherReduser } from '../store/slice';

const redusers = () =>
combineReducers({
  weather: weatherReduser,
  forecust: feracustReduser,
});

export default redusers;