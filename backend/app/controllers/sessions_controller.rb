class SessionsController < ApplicationController

  def new
  @user = User.find_by_email(params[:email])
  if @user && @user.authenticate(params[:password])
    # session[:user_id] = @user.id
    token = encode_token({ user_id: @user.id })
    render json: {token}, status: :accepted
  else
    render json: {error: 'Invalid username or password'}
  end
  #   redirect_to root_url, notice: "Logged in!"
  # else
  #   flash.now.alert = "Email or password is invalid."
  # end
end

end

token = encode_token({ user_id: @user.id })
    render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted

#
# def update
#     current_user.update(user_params)
#     render json: {user: UserSerializer.new(current_user)}, status: :ok
#   end
#
#   def login
#     @user = User.find_by(username: user_login_params[:username])
#     if @user && @user.authenticate(user_login_params[:password])
#       token = encode_token({ user_id: @user.id })
#       render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
#     else
#       render json: { message: 'Invalid username or password' }, status: :unauthorized
#     end
#   end
#
#   def validate
#     render json: { user: UserSerializer.new(current_user)}, status: :ok
#   end
#
#   private
#
#   def user_login_params
#     params.require(:user).permit(:username, :password)
#   end
# end
