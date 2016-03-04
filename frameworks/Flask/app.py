from automatic_potato import AutomaticPotato

from flask import Flask, request, send_from_directory, send_file
app = Flask('AutomaticPotato')
app.config.update(
    DEBUG=True,
    SERVER_NAME='localhost:3000'
)

@app.route('/')
def root():
    return intro()

def intro():
    return 'This is Automatic Potato via Flask.'

@app.route('/auto-potate')
def auto_potate():
    path = new_potato_path()
    return send_file(path)

def new_potato_path():
    new_potato = AutomaticPotato()
    return new_potato.full_path()

if __name__ == '__main__':
    app.run()
