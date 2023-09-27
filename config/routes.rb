Rails.application.routes.draw do
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/tags', to: 'tag#index'
 
  # Recipes 
  resources :recipes

  # Sessions 
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Users 
  get '/users/:id', to: 'users#show'
  get '/users/profile', to: 'users#profile'
  post '/users', to: "users#create"
  patch '/users/profile', to: 'users#update'
  delete  '/users/profile', to: 'users#destroy'

  # fallback controller
  get '*path' ,
    to: 'fallback#index', 
    constraints: ->(req) { !req.xhr? && req.format.html?}
    
end
