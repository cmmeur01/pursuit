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
    @workouts = Workout.all
    render :index
  end

  def show
    @workout = Workout.find_by(id: params[:id])
    render :show
  end

  private
  def workout_params
    params.require(:workout).permit(:user_id, :route_id, :title, :description, :duration, :sport, :date)
  end
end