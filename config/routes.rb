Rails.application.routes.draw do
  resources :trades
  root :to => "pages#home"

  resources :users, :only => [:new, :create, :index, :update, :home]
  resources :reviews
  resources :reservations
  resources :quotes
  resources :trades
  resources :charges

  get '/charges/new' => 'charges#new', :as => 'pay_charges'
  get '/users' => "users#index"
  get '/users/edit' => "users#edit", :as => 'edit_user'
  get '/users/:id' => "users#show", :as => 'user_profile'


  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

end
