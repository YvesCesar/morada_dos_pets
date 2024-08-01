# frozen_string_literal: true

class BannerComponent < ViewComponent::Base
  def initialize(image:, title:, description: nil, button_title: nil)
    @title = title
    @description = description
    @image = image
    @button_title = button_title
  end

end
