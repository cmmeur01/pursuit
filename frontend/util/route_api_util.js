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