require 'pathname'
require 'sinatra'

class AutomaticPotatoApp < Sinatra::Base
  POTATOES = begin
    dir = File.expand_path('../public', __FILE__)
    Pathname.new(dir).each_child.map(&:basename)
  end.freeze

  get '/' do
    auto_potate = POTATOES.sample
    redirect(auto_potate)
  end
end
