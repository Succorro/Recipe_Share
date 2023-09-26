class User < ApplicationRecord
    has_one_attached :image
    
    has_many :recipes, dependent: :destroy
end
