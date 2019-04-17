import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './routes_reducer';

// this will need the routes and workouts
// reducers added when implmented

export default combineReducers({
  users: usersReducer,
  routes: routesReducer
});