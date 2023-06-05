Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json },
                     controllers: { sessions: 'users/sessions',
                                    registrations: 'users/registrations' }

  get 'components/index'
  root 'components#index'
end
