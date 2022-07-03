Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :show, :create]
  resources :gardens, only: [:index, :show, :create, :destroy]
  resources :garden_squares
  resources :crops, only: [:index, :show, :create]

  # Defines the root path route ("/")
  # root "articles#index"
  get "/all_squares/:id", to: "garden_squares#all_squares"
  post "/all_squares/:id", to: "garden_squares#create_squares"
  post "/create_garden", to: "gardens#create"
  get "/current_garden", to: "gardens#show"
  post "/remove", to: "sessions#remove"
  post "/signup", to: "users#create"
  get "/current_user", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
