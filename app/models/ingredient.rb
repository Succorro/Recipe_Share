class Ingredient < ApplicationRecord
  belongs_to :recipe

  validates :unit, :qty, :name, presence: true 
  validates_uniqueness_of :name, scope: :recipe_id, case_sensitive: false
end
