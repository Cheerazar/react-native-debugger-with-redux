import { combineReducers } from 'redux';

import PressReducer from './PressReducer';

export default combineReducers({
  press: PressReducer,
});
