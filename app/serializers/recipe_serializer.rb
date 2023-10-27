class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructions, :prep_time, :cooking_time, :total_time, :username, :image_url
  has_many :ingredients
  has_many :tags
  has_many :recipe_tags 
  def total_time 
    object.prep_time + object.cooking_time
  end 

  def username 
    object.user.username
  end

  def image_url 
    if object.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.image, only_path: true)
    else 
      '/Steak.jpg'
    end 
  end 

end
