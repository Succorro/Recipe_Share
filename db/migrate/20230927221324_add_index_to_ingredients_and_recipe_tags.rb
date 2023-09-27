class AddIndexToIngredientsAndRecipeTags < ActiveRecord::Migration[7.0]
  def change
    add_index :ingredients, [:name, :unit, :qty], unique: true
    add_index :recipe_tags, [:recipe_id, :tag_id], unique: true 
  end
end
