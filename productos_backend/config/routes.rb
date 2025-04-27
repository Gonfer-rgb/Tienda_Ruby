Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categorias, only: [:index, :create, :update, :destroy]
      resources :productos, only: [:index, :create, :update, :destroy]
    end
  end
end