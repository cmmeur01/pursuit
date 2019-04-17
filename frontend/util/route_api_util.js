export const create = (route) => {
  return $.ajax({
    method: 'POST',
    url: "/api/routes",
    data: { route }
  });
};