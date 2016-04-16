class SessionController < ApplicationController

  def new
  end

  #def create
  #  user = User.find_by :email => params[:email]
  #    if user.present? && user.authenticate(params[:password])
  #      session[:user_id] = user.id
  #      ##log em in
  #      redirect_to root_path
  #    else
  #      flash[:error] = "Incorrect password or email"
  #      redirect_to login_path
  #  end
  # end
  #
  # def destroy
  #  session[:user_id] = nil
  #  redirect_to root_path

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:success] = "You have successfully logged in."
      redirect_to user_path(user)
    else
      flash.now[:danger] = "Invalid Email and/or Password!"
        render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "You have logged out"
    redirect_to root_path
  end

end
