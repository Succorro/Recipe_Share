class UsersController < ApplicationController
  skip_before_action :authorize, only: [:show, :create]

  # # GET /users
  # def index
  #   @users = User.all

  #   render json: @users
  # end

  # GET /users/:id
  def show
    user = User.find_by(id: params[:id])
    render json: user, status: :ok 
  end
  
  # GET /users/profile
  def profile 
    render json: @current_user, status: :ok
  end 

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id 
    render json: user, status: :created 
  end

  # PATCH/PUT /users/profile
  def update
    @current_user.update!(user_params)
    render json: @current_user, status: :accepted
  end

  # DELETE /users/profile
  def destroy
    @current_user.destroy
  end

  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password, :password_confirmation, :email, :first_name, :last_name, :bio)
    end
end
