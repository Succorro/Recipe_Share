class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :last_name, :bio, :recipes, :avatar

  
  def recipes 
    @recipes = object.recipes.all.map {|recipe| {"title" => recipe.title, "total_time" => recipe.prep_time + recipe.cooking_time, "id" => recipe.id }}
  end 

  def avatar
    avatar_format(object)  # Pass the user object to the method
  end
  private 
  def avatar_format(user)
    if object.avatar.attached?
      object.avatar.blob.attributes
        .slice('filename', 'byte_size')
        .merge(url: url_for(object.avatar_url))
        .tap { |attrs| attrs['name'] = attrs.delete('filename') }
    else
      # Return default values or handle the case when the avatar is not attached
      {url: '/default_profile.jpeg' }
    end
  end
  
end
