Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, only: [:index, :show, :create]
    resources :gardens, only: [:index, :show, :create, :destroy]
    resources :garden_squares
    resources :crops, only: [:index, :show, :create]

    # Defines the root path route ("/")
    # root "users#index"
    get "/all_gardens/:user_id", to: "gardens#all_gardens"
    get "/garden_data/:id", to: "garden_squares#garden_data"
    get "/all_squares/:id", to: "garden_squares#all_squares"
    post "/all_squares/:id", to: "garden_squares#create_squares"
    
    # current_garden sessions
    post "/create_garden", to: "gardens#create"
    get "/current_garden", to: "gardens#show"
    post "/assign_garden", to: "sessions#assign"
    delete "/remove", to: "sessions#remove"

    # current_user sessions
    post "/signup", to: "users#create"
    get "/current_user", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
