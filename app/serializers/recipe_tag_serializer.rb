class RecipeTagSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :tag_id
end
