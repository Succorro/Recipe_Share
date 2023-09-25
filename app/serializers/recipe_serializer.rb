class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructions, :prep_time, :cooking_time, :username
  has_many :ingredients

  def tags 
    object.tag.all
  end 
  
  def username 
    object.user&.username
  end
end
