export const create = (workout) => {
  return $.ajax({
    method: 'POST',
    url: "/api/workouts",
    data: { workout }
  });
};

export const getWorkouts = () => {
  return $.ajax({
    method: 'GET',
    url: "/api/workouts"
  });
};

export const getSingleWorkout = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/workouts/${id}`,
    data: {}
  });
};
