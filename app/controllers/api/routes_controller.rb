class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
    if @route.save
      render :show
    else
      @errors = @route.errors.full_messages.to_json
      render :json => @errors, status: 422
    end
  end

  def index
    @routes = Route.all
    render :index
  end

  def show
    @route = Route.find_by(id: params[:id])
    render :show
  end

  private
  def route_params
    params.require(:route).permit(:user_id, :title, :description, :distance, :elevation, :route, :sport)
  end
end