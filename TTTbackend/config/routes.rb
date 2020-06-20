Rails.application.routes.draw do

  resources :users
  resources :auth

  post 'signup', to: 'users#create', as: 'signup'
  post 'login', to: 'auth#login', as: 'login'
  delete 'delete', to: 'users#destroy',  as: 'delete'

end
