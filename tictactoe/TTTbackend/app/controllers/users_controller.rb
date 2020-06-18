class UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: @user, status: :created
    else
    render "new"
  end
  end

  def user_params
   params.require(:user).permit(:email, :password)
 end

end
