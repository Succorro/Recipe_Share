class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :recipe_tags 
  has_many :tags, through: :recipe_tags
  has_one_attached :image
end
