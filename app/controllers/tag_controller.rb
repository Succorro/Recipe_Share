class TagController < ApplicationController

    def index 
        render json: Tag.all, status: :ok 
    end 
end
