class Ingredient < ApplicationRecord
  belongs_to :recipe

  validates :unit, :qty, :name, :recipe_id, presence: true 
end
