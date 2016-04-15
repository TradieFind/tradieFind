Rails.application.routes.draw do
  root :to => "users#index"
  resources :reviews
  resources :reservations
  resources :quotes
  resources :users

end
