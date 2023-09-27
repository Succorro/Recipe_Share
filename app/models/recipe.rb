class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients, -> { distinct }, dependent: :destroy
  has_many :recipe_tags, -> { distinct }, dependent: :destroy
  has_many :tags,  -> { distinct },through: :recipe_tags
  has_one_attached :image

  accepts_nested_attributes_for :ingredients, reject_if: ->(attributes){ attributes['name'].blank? }, allow_destroy: true
  accepts_nested_attributes_for :recipe_tags, reject_if: ->(attributes){ attributes['tag_id'].blank? }, allow_destroy: true
end
