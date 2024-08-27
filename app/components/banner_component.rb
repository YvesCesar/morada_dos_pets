# frozen_string_literal: true

class BannerComponent < ViewComponent::Base
  def initialize(image_reference:, title:, description: nil, button_title: nil)
    @image_reference = image_reference
    @title = title
    @description = description
    @button_title = button_title
  end
end
