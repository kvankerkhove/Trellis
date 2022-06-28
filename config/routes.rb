Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :show, :create]
  resources :gardens, only: [:index, :show, :create, :destroy]
  resources :garden_squares
  resources :crops, only: [:index, :show, :create]

  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"
  get "/current_user", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
