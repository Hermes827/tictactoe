class UsersController < ApplicationController

  def create
    # debugger
    # @user = User.create(user_stuff)
    @user = User.create(email: params[:email], password: params[:password])
    # this worked when I wrote it out like this instead of using "user_params", but why?
    # it wasnt working because I need the params in user_params to be run through the serializer first
    if @user.valid?
      render json: @user, status: :created
    else
    render json: {error: 'failed to create user'}
  end
  end

  # def user_stuff
  #  params.require(:user).permit(:email, :password)
  # end

  # def new
  #   @user = User.new
  # end
  #
  # def create
  #   @user = User.new(user_params)
  #   if @user.save
  #     render json: @user, status: :created
  #   else
  #     render "new"
  #   end
  # end
  #
  # def create
  #    @user = User.create()
  # end

end

# render json: {error: 'failed to create user'}, status: :not_acceptable
# this code returns a 406 error for some reason
# render "new" works though
