Map::Application.routes.draw do
  devise_for :users
  root "pin#new"

  resources :pin 

end
