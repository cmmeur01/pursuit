import { create, getRoutes, getSingleRoute, getRouteOwner } from './../util/route_api_util';

export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route
});

const receiveRoutes = (routes) => ({
  type: RECEIVE_ROUTES,
  routes
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveRouteErrors = (errors) => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
});

export const createRoute = (route) => dispatch => {
  return create(route).then(route => dispatch(receiveRoute(route)),
    errors => console.log(errors)
  );
};

export const getAllRoutes = () => dispatch => {
  return getRoutes().then(routes => dispatch(receiveRoutes(routes)),
    errors => console.log(errors)
  );
};

export const getRoute = (id) => dispatch => {
  return getSingleRoute(id).then(route => dispatch(receiveRoute(route)),
    errors => console.log(errors)
  );
};

export const getOwner = (id) => dispatch => {
  return getRouteOwner(id).then(user => dispatch(receiveUser(user)),
    errors => console.log(errors)
  );
};



//dispatch(receiveRouteErrors(errors.responseJSON)