class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  # GET /users/profile
  def show
    render json: @current_user, status: :ok
  end
  
  # POST /users
  def create
    user = User.create!(create_params)
    session[:user_id] = user.id 
    render json: user, status: :created 
  end

  # PATCH/PUT /users/profile
  def update
    @current_user.update_without_password(user_params)
    render json: @current_user, status: :accepted
  end

  # DELETE /users/profile
  def destroy
    @current_user.destroy
    head :no_content
  end

  private
    # Only allow a list of trusted parameters through.
    def create_params
      params.permit(:username, :password, :password_confirmation, :email, :first_name, :last_name, :bio, :avatar)
    end
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation, :email, :first_name, :last_name, :bio, :avatar)
    end
end
