class User < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_secure_password
    
    has_one_attached :avatar

    def avatar_url 
      url_for(self.avatar)
    end
    
    def avatar_thumbnail 
        avatar.variant(resize: '100x100').processed 
    end 
    has_many :recipes, dependent: :destroy

    validates :password, length: { minimum: 8, message: "must be at least 8 characters long" }, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}\z/, message: "must include at least one uppercase letter, one lowercase letter, one digit, and one special character" }, confirmation: true
    validates :username, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 15}
    validates :email, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :first_name, presence: true
    validates :last_name, presence: true
end
