class Recipe < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :user
  has_many :ingredients, -> { distinct }, dependent: :destroy
  has_many :recipe_tags, -> { distinct }, dependent: :destroy
  has_many :tags, through: :recipe_tags

  has_one_attached :image
  
  def image_url 
    url_for(self.image)
  end
  
 def image_size 
  image.variant(resize: '550x350').processed 
 end 
  accepts_nested_attributes_for :ingredients, reject_if: ->(attributes){ attributes['name'].blank? }, allow_destroy: true
  accepts_nested_attributes_for :recipe_tags, reject_if: ->(attributes){ attributes['tag_id'].blank? }, allow_destroy: true
  
  validates :title, presence: true, length: {maximum: 40}
  validates :description, presence: true, length: {minimum: 10}
  validates :instructions, presence: true, length: {minimum: 30}
  validates :prep_time, presence: true, numericality: {only_integer: true}
  validates :cooking_time, presence: true, numericality: {only_integer: true}
  validates :user_id, presence: true
  validates :ingredients, presence: true
  validate :validate_ingredients

  private

  def validate_ingredients
    return if ingredients.blank?

    ingredients.each do |ingredient|
      validate_presence_of_ingredient_attributes(ingredient)
      validate_valid_measurement_units(ingredient)
      validate_quantity_format(ingredient)
    end
  end

  def validate_presence_of_ingredient_attributes(ingredient)
    errors.add(:ingredients, "must have a name, quantity, and unit") unless ingredient['name'].present? && ingredient['qty'].present? && ingredient['unit'].present?
  end

  def validate_valid_measurement_units(ingredient)
    valid_units = %w(teaspoon tablespoon cup fluid_ounce pint quart gallon milliliter liter ounce pound pinch dash drop gram kilogram piece whole bunch)
    unit = ingredient['unit'].singularize.downcase
    errors.add(:ingredients, "must have a valid unit of measurement such as: teaspoon, tablespoon, cup, fluid_ounce, pint, quart, gallon, milliliter, liter, ounce, pound, pinch, dash, drop, gram, kilogram, piece") unless valid_units.include?(unit)
  end

  def validate_quantity_format(ingredient)
    unless valid_quantity_format?(ingredient['qty'])
      errors.add(:ingredients, "quantity must be in decimal format or whole numbers only")
    end
  end

  def valid_quantity_format?(qty)
    /\A\d+(\.\d+)?\z/.match?(qty.to_s)
  end

end
