Rails.application.routes.draw do
  root :to => "pages#home"

  resources :users, :only => [:new, :create, :index, :update, :home]
  resources :reviews, :only => [:new, :create, :index, :update, :home]
  resources :reservations
  resources :quotes


  get '/users' => "users#index"
  get '/users/:id' => "users#show", :as => 'user_profile'
  get '/users/edit' => "users#edit", :as => 'edit_user'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

end
