class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users, status: :ok
  end

  # def index
  #    @records = Record.all
  #    render json: @records, status: :ok
  #  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def create
    @user = User.create(email: params[:email], username: params[:username], password: params[:password])
    # this worked when I wrote it out like this instead of using "user_params", but why?
    # it wasnt working because I need the params in user_params to be run through the serializer first
    if @user.valid?
      render json: @user, status: :created
    else
    render json: {error: 'failed to create user'}
  end
  end

  # def profile
  #   render json: {user: current_user}, status: :accepted
  # end

  def destroy
    current_user.delete
  end

end

# render json: {error: 'failed to create user'}, status: :not_acceptable
# this code returns a 406 error for some reason
# render "new" works though
