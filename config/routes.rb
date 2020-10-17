Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, {format: :json} do
    resources :users, only: [ :create ]
    resources :songs, only: [ :index, :create, :update, :destroy, :show, :index ]
    
    resource :session, only: [ :create, :destroy ]
  end
end
