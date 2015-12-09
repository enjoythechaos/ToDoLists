Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:index, :create]
    end
  end

  resources :steps, only: [:update, :destroy]

  root to: 'static_pages#home'
end
