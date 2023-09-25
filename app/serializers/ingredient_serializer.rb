class IngredientSerializer < ActiveModel::Serializer
  attributes :name, :unit, :qty
  # has_one :recipe
end
