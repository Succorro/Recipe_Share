class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructions, :prep_time, :cooking_time, :total_time, :username, :tags
  has_many :ingredients
  has_many :tags
  has_many :recipe_tags
  def total_time 
    object.prep_time + object.cooking_time
  end 

  def username 
    object.user.username
  end
end
