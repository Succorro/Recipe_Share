class AddIndexToIngredientsAndRecipeTags < ActiveRecord::Migration[7.0]
  def change
    # add_index :ingredients, [:name, :unit, :qty]
    # add_index :recipe_tags, [:recipe_id, :tag_id] 
  end
end
