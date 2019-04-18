import { create } from './../util/route_api_util';

export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

const receiveRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route
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

//dispatch(receiveRouteErrors(errors.responseJSON)