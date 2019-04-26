export const create = (workout) => {
  return $.ajax({
    method: 'POST',
    url: "/api/workouts",
    data: { workout }
  });
};

export const getWorkouts = (id) => {
  return $.ajax({
    method: 'GET',
    url: "/api/workouts",
    data: { id }
  });
};

export const getSingleWorkout = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/workouts/${id}`,
    data: {}
  });
};
