class Api::WorkoutsController < ApplicationController
  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render :show
    else
      @errors = @workout.errors.full_messages.to_json
      render :json => @errors, status: 422
    end
  end

  def index
    user_id = params[:id]
    @workouts = Workout.where(user_id: user_id)
    render :index
  end

  def show
    @workout = Workout.find_by(id: params[:id])
    @route = Route.find_by(id: @workout.route_id)
    render :show
  end

  private
  def workout_params
    params.require(:workout).permit(:user_id, :route_id, :title, :description, :duration, :sport, :date)
  end
end