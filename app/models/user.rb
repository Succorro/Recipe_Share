class User < ApplicationRecord

    has_secure_password
    
    has_one_attached :image
    has_many :recipes, dependent: :destroy

    validates :username, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 15}
    validates :email, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :first_name, presence: true
    validates :last_name, presence: true
end
