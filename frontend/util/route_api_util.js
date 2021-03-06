export const create = (route) => {
  return $.ajax({
    method: 'POST',
    url: "/api/routes",
    data: { route }
  });
};

//data will point to the sport eventually
export const getRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: "/api/routes",
    data: {}
  });
};

export const getSingleRoute = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/routes/${id}`,
    data: {}
  });
};

export const getRouteOwner = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    data: {}
  });
};
