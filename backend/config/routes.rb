Rails.application.routes.draw do
  post 'signup', to: 'users#create', as: 'signup'
  post 'login', to: 'auth#login', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'


  resources :users
  resources :auth
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
