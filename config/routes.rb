Rails.application.routes.draw do
  root :to => "pages#home"

  resources :reviews
  resources :reservations
  resources :quotes
  resources :users

  get '/users' => "users#index"

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
