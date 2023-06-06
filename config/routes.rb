Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json },
                     controllers: { sessions: 'users/sessions',
                                    registrations: 'users/registrations' }

  get 'components/index'
  root 'components#index'

  resources :invitations, only: %i[index create]

  get '*path', to: 'components#index', via: :all
end
