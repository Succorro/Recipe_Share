class Ingredient < ApplicationRecord
  belongs_to :recipe

  validates :unit, :qty, :name, presence: true 
end
