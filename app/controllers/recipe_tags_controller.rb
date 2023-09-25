class RecipeTagsController < ApplicationController
  before_action :set_recipe_tag, only: %i[ show update destroy ]

  # GET /recipe_tags
  def index
    @recipe_tags = RecipeTag.all

    render json: @recipe_tags
  end

  # GET /recipe_tags/1
  def show
    render json: @recipe_tag
  end

  # POST /recipe_tags
  def create
    @recipe_tag = RecipeTag.new(recipe_tag_params)

    if @recipe_tag.save
      render json: @recipe_tag, status: :created, location: @recipe_tag
    else
      render json: @recipe_tag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipe_tags/1
  def update
    if @recipe_tag.update(recipe_tag_params)
      render json: @recipe_tag
    else
      render json: @recipe_tag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipe_tags/1
  def destroy
    @recipe_tag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe_tag
      @recipe_tag = RecipeTag.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def recipe_tag_params
      params.require(:recipe_tag).permit(:recipe_id, :tag_id)
    end
end
