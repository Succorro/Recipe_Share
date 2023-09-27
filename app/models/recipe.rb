class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients, dependent: :destroy
  has_many :recipe_tags, dependent: :destroy
  has_many :tags, through: :recipe_tags
  has_one_attached :image

  accepts_nested_attributes_for :ingredients, reject_if: ->(attributes){ attributes['name'].blank? }, allow_destroy: true
  accepts_nested_attributes_for :recipe_tags, reject_if: ->(attributes){ attributes['name'].blank? }, allow_destroy: true
end
