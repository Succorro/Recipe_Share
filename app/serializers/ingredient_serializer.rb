class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :unit, :qty
end
