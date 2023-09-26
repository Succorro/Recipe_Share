class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :first_name, :last_name, :bio, :image, :recipes

  
  def recipes 
    @recipes = object.recipes.all.map {|recipe| {"title" => recipe.title, "prep_time" => recipe.prep_time, "cooking_time" => recipe.cooking_time }}
  end 
  
end
