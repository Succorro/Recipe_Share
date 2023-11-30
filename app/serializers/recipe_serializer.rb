class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructions, :prep_time, :cooking_time, :total_time, :username, :image_format
  has_many :ingredients
  has_many :tags
  has_many :recipe_tags 

  def image_format 
    return unless object.image.attached?
    object.image.blob.attributes
        .slice('filename','byte_size')
        .merge(url: object.image_url)
        .tap { |attrs| attrs['name'] = attrs.delete('filename')}
  end

  def total_time 
    object.prep_time + object.cooking_time
  end 

  def username 
    object.user.username
  end

end
