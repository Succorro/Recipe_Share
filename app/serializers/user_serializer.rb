class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :last_name, :bio, :recipes, :avatar_format

  
  def recipes 
    @recipes = object.recipes.all.map {|recipe| {"title" => recipe.title, "total_time" => recipe.prep_time + recipe.cooking_time, "id" => recipe.id }}
  end 

  
  def avatar_format 
    return unless object.avatar.attached?
    object.avatar.blob.attributes
        .slice('filename','byte_size')
        .merge(url: object.avatar_url)
        .tap { |attrs| attrs['name'] = attrs.delete('filename')}
  end
end
