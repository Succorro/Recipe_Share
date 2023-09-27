Rails.application.routes.draw do
  # resources :ingredients
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/tags', to: 'tag#index'
 
  # Recipes 
  resources :recipes
  
  # # recipe_tags 
  # post '/recipe_tags', to: 'recipe_tags#create'
  # delete '/recipe_tags/:id', to: 'recipe_tags#delete'

  # Users 
  get '/users/:id', to: 'users#show'
  get '/users/profile', to: 'users#profile'
  patch '/users/profile', to: 'users#update'
  delete  '/users/profile', to: 'users#destroy'

  # fallback controller
  get '*path' ,
    to: 'fallback#index', 
    constraints: ->(req) { !req.xhr? && req.format.html?}
    
end
