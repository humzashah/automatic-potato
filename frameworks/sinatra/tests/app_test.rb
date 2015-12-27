ENV['RACK_ENV'] ||= 'test'
require_relative '../app'

class AppTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    AutomaticPotatoApp
  end

  def test_home_works
    get '/'
    assert last_response.ok?
  end

  def test_home_shows_intro
    get '/'
    assert_equal app::INTRO, last_response.body
  end

  def test_auto_potate_works
    get '/auto-potate'
    assert last_response.ok?
  end

  def test_auto_potate_returns_image
    get '/auto-potate'
    content_types = %w(
      image/gif
      image/jpeg
      image/jpg
    )
    content_type = last_response.content_type
    assert_includes content_types, content_type
  end
end
