class RecipeTagsController < ApplicationController

  # POST /recipe_tags
  def create
    @recipe_tag = RecipeTag.new(recipe_tag_params)

    if @recipe_tag.save
      render json: @recipe_tag, status: :created, location: @recipe_tag
    else
      render json: @recipe_tag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipe_tags/1
  def destroy
    @recipe_tag.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def recipe_tag_params
      params.require(:recipe_tag).permit(:recipe_id, :tag_id)
    end
end
