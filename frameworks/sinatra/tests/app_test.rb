ENV['RACK_ENV'] = 'test'

require_relative '../app'
require 'test/unit'
require 'rack/test'

class AppTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    AutomaticPotatoApp
  end

  def test_it_returns_image
    get '/auto-potate'
    content_types = %w(
      image/gif
      image/jpeg
      image/jpg
    )
    content_type = last_response.content_type
    assert_includes(content_types, content_type)
  end
end
