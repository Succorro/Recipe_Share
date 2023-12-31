class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :email, :first_name, :last_name, :bio, :recipes, :avatar

  
  def recipes 
    @recipes = object.recipes.all.map {|recipe| {"title" => recipe.title, "total_time" => recipe.prep_time + recipe.cooking_time, "id" => recipe.id }}
  end 
 
  def avatar
    if object.avatar.attached?
      rails_blob_path(object.avatar, only_path: true)
      # object.avatar.blob.attributes
      #   .slice('filename', 'byte_size')
      #   .merge(url: url_for(object.avatar_url))
      #   .tap { |attrs| attrs['name'] = attrs.delete('filename') }
    else
      # Return default values or handle the case when the avatar is not attached
       '/default_profile.jpeg' 
    end
  end
  
end
