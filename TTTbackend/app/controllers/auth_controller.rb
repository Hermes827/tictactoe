class AuthController < ApplicationController

  def login
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      jwt = encode_token({ user_id: @user.id })
      render json: {user:@user, jwt:jwt}, status: :accepted
    else
      render json: {error: 'Invalid username or password'}
    end
    end
  end

  # turns out that the problem was due to how email, password were being reformated when I
  # turned them into the object "user" in login.js. I guess this is what the serializer is
  # supposed to prevent
