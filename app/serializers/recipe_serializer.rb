class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructions, :prep_time, :cooking_time, :total_time, :username, :tags
  has_many :ingredients

  def tags
    @tags = [] 
    object.tags.all.map {|tag| @tags << tag.name}
    @tags
  end 
  def total_time 
    object.prep_time + object.cooking_time
  end 

  def username 
    object.user&.username
  end
end
