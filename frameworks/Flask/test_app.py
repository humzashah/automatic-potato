import unittest
import app
import imghdr

class FlaskrTestCase(unittest.TestCase):
    def setUp(self): # have to use built-in camel-case method
        self.set_up()

    def set_up(self):
        self.app = app.app.test_client()

    def hit_route(self, route_name):
        return self.app.get(route_name).data

    def test_intro(self):
        message = self.hit_route('/')
        assert app.intro() in message

    def test_auto_potate(self):
        message = self.hit_route('/auto-potate')
        image_type = imghdr.what(None, message)
        assert image_type in ['gif', 'jpeg', 'jpg']

if __name__ == '__main__':
    unittest.main()
