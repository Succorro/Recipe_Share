class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :first_name, :last_name, :bio, :image

  has_many :recipes   
end
