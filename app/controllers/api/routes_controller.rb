class Api::RoutesController < ApplicationController
  def create
    @route = route.new(route_params)
    if @route.save
      render :show
    else
      @errors = @route.errors.full_messages.to_json
      render :json => @errors, status: 422
    end
  end

  private
  def route_params
    params.require(:route).permit(:user_id, :title, :description, :route, :distance, :elevation)
  end
end