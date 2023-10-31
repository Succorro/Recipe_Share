class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients, -> { distinct }, dependent: :destroy
  has_many :recipe_tags, -> { distinct }, dependent: :destroy
  has_many :tags, through: :recipe_tags

  has_one_attached :image
 def image_size 
  image.variant(resize: '550x350').processed 
 end 
  accepts_nested_attributes_for :ingredients, reject_if: ->(attributes){ attributes['name'].blank? }, allow_destroy: true
  accepts_nested_attributes_for :recipe_tags, reject_if: ->(attributes){ attributes['tag_id'].blank? }, allow_destroy: true
  
  validates :title, presence: true, length: {maximum: 20}
  validates :description, presence: true, length: {minimum: 25}
  validates :instructions, presence: true, length: {minimum: 50}
  validates :prep_time, presence: true, numericality: {only_integer: true}
  validates :cooking_time, presence: true, numericality: {only_integer: true}
  validates :user_id, presence: true

end
