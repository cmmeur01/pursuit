@routes.each do |route|
  json.set! route.id do 
    json.extract! route, :id, :title, :description, :distance, :elevation, :route, :user_id
  end
end