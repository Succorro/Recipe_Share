class RecipeTagSerializer < ActiveModel::Serializer
  attributes :id
  has_one :recipe
  has_one :tag
end
