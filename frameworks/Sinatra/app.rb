require 'bundler'
Bundler.require('default', ENV['RACK_ENV'] || 'development')

class AutomaticPotatoApp < Sinatra::Base
  INTRO = 'This is Automatic Potato via Sinatra.'
  POTATOES = Dir[File.expand_path('../../../public/**', __FILE__)]

  get '/' do
    INTRO
  end

  get '/auto-potate' do
    file = POTATOES.sample
    send_file file, last_modified: Time.new
  end
end
