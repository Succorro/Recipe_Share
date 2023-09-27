class RecipeTagsController < ApplicationController

  # POST /recipe_tags
  def create
    recipe_tag = RecipeTag.create!(recipe_tag_params)
    render json: recipe_tag, status: :created

  end

  # DELETE /recipe_tags/:id
  def destroy
    recipe_tag = @current_user.recipe.recipe_tag.find_by(id: params[:id]) 
    recipe_tag.destroy
    head :no_content, status: :delete
  end

  private

    # Only allow a list of trusted parameters through.
    def recipe_tag_params
      params.require(:recipe_tag).permit(:recipe_id, :tag_id)
    end

end
