@workouts.each do |workout|
  json.set! workout.id do 
    json.extract! workout, :id, :user_id, :route_id, :title, :description, :duration, :sport, :date
  end
end