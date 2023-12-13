Rails.application.routes.draw do
  default_url_options :host => "http://localhost:3000"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/tags', to: 'tag#index'
 
  # Recipes 
  get '/recipes/search', to: 'recipes#search'
  resources :recipes


  # Sessions 
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Users  
  get '/users/profile', to: 'users#show'
  resources :users, only: [:create, :update, :destroy]

  # fallback controller
  get '*path' ,
    to: 'fallback#index', 
    constraints: ->(req) { !req.xhr? && req.format.html?}

end
