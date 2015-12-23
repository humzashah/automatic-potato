## [Sinatra](https://github.com/sinatra/sinatra)

Built using Ruby version 2.2.3.

### Usage

Clone the repo. `cd` into the folder where this `README.md` lives.

Install the gems:

    bundle install

Run the following to start your server:

    bundle exec rackup

Visit `http://localhost:3000/auto-potate` to automatically reap a potato!

### Tests

After installing gems, run the following from the same folder:

    RACK_ENV=test bundle exec ruby tests/**/*.rb
