const getUsers = () => {
  return $.ajax({
    method: 'GET',
    url: "/api/users",
    data: {}
  });
};

export default getUsers;