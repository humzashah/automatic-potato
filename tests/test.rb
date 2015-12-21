ENV['RACK_ENV'] = 'test'

require_relative '../app'
require 'test/unit'
require 'rack/test'

class AppTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    AutomaticPotatoApp
  end

  def test_it_redirects
    get '/'
    status = last_response.status
    assert_equal(302, status)
  end

  def test_it_returns_file
    get '/'
    location = last_response.location
    potato_name = File.basename(location)
    potato_names = app::POTATOES.map(&:to_path)
    assert_includes(potato_names, potato_name)
  end
end
