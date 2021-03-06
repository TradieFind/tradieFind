class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  # before_action :authorise, :only => [:index]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find params[:id]

    # @user = @current_user
  end

  def new
      @user = User.new
    end

    def create
      @user = User.new user_params
      if @user.save
        session[:user_id] = @user.id
        redirect_to root_path
      else
        render :new
      end
    end

    def edit
    @user = @current_user
    end

    def update
      user = @current_user || User.find(params[:id])
      user.update user_params
      respond_to do |format|
        format.html { redirect_to "#user" }
        format.js { render :json => user }
      end
      #redirect_to root_path
    end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:id, :fileInput, :avatar, :first_name, :last_name, :email, :password,
       :password_confirmation, :company_name, :trade, :rate, :phone_no,
        :qualifications, :address_one, :address_two, :lat, :lon)
        # params.require(:team).permit(:name,:captain,:season,:year,:active,player_ids: [])

    end

    def authorise
      redirect_to login_path unless (@current_user.present? && @current_user.admin?)
    end

end
