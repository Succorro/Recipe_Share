class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:show]
  # # GET /users
  # def index
  #   @users = User.all

  #   render json: @users
  # end
  # GET /users/me
  def me 
    render json: @current_user, status: :ok
  end 

  # GET /users/:id
  def show
    user = User.find_by(id: params[:id])
    render json: user, status: :ok 
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id 
    render json: user, status: :created 
  end

  # PATCH/PUT /users/me
  def update
    @current_user.update!(user_params)
    render json: @current_user, status: :accepted
  end

  # DELETE /users/me
  def destroy
    @current_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password_digest, :email, :first_name, :last_name, :bio)
    end
end
