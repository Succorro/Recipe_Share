class TagController < ApplicationController
    skip_before_action :authorize
    def index 
        render json: Tag.all, status: :ok 
    end 
end
