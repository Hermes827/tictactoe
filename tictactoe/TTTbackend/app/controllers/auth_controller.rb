class AuthController < ApplicationController

  def login
    # debugger
  @user = User.find_by(email: params[:email])
  # debugger
  if @user && @user.authenticate(params[:password])
   # debugger
    # session[:user_id] = @user.id
    jwt = encode_token({ user_id: @user.id })
    render json: {user:@user, jwt:jwt}, status: :accepted
  else
    render json: {error: 'Invalid username or password'}
  end
  #   redirect_to root_url, notice: "Logged in!"
  # else
  #   flash.now.alert = "Email or password is invalid."
  # end
end


end
