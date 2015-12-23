require 'sinatra'
require 'pathname'

class AutomaticPotatoApp < Sinatra::Base
  POTATOES = begin
    Dir[File.expand_path('../../../public/**', __FILE__)]
  end

  get '/auto-potate' do
    file = POTATOES.sample
    mod_time = Time.new

    send_file file, last_modified: Time.new
  end
end
