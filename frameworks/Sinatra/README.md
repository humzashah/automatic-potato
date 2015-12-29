## [Sinatra](https://github.com/sinatra/sinatra)

### Usage

Clone the repo. `cd` into the folder where this `README.md` lives.

Install depdendencies:

    bundle install --without test

Run the following to start your server:

    rackup

Visit `http://localhost:3000/auto-potate` to automatically reap a potato!

### Tests

Suite: [Test::Unit](http://test-unit.github.io/)

Run the following from the framework's folder:

    bundle install
    ruby tests/**/*.rb
