class RecipesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :search]

  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes, status: :ok
  end

  # GET /recipes/1
  def show
    recipe = Recipe.find_by(id: params[:id])
    render json: recipe, status: :ok
  end

  # GET /recipes/search 
  def search 
    search = params[:search]
    recipes = Recipe.where("LOWER(title) LIKE ?", "%#{search.downcase}%").limit(10)
    render json: recipes, status: :ok
  end 

  # POST /recipes
  def create
    recipe = @current_user.recipes.create!(recipe_params)
    render json: recipe, status: :created
  end

  # PATCH/PUT /recipes/1
  def update
    recipe = @current_user.recipes.find_by(id: params[:id])
    if @current_user.recipes.include?(recipe)
      recipe.update!(recipe_params)
      render json: recipe, status: :accepted
    else
      render json: { errors: ["Not authorized to update recipe"] }, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    recipe = @current_user.recipes.find_by(id: params[:id])
    if @current_user.recipes.include?(recipe)
      recipe&.destroy 
      head :no_content , status: :no_content
    else
      render json: { errors: ["Not authorized to delete recipe"] }, status: :unauthorized
    end 
  end

  private
    # Only allow a list of trusted parameters through. Include associated data: ingredients, recipe_tags
    def recipe_params
      params.require(:recipe).permit(:image,:id, :title, :description, :instructions, :prep_time, :cooking_time, :user_id, :ingredients_attributes => [:id, :name, :qty, :unit, :_destroy], :recipe_tags_attributes => [:id, :tag_id, :_destroy])
    end
end
