Rails.application.routes.draw do

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/user_by_phone_number/:id', to: "users#user_by_phone_number"
  get '/most_popular_dealer', to: "dealers#most_popular_dealer"

  resources :customers, only: [:show, :index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "customers#index"
end
