# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "about_us", to: "about_us#index"
  get "services", to: "services#index"
  # Defines the root path route ("/")
  # root "articles#index"
  root "home#index"
end
