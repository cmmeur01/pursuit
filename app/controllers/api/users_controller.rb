class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      @errors = @user.errors.full_messages.to_json
      render :json => @errors, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def index
    @users = User.all
  end


  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end