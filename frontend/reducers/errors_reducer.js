import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import routeErrorsReducer from './route_errors_reducer';

// this will need the routes and workouts
// error reducers added when implmented

export default combineReducers({
  session: sessionErrorsReducer,
  route: routeErrorsReducer
});