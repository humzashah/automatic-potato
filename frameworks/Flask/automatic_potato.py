import os.path
import random

class AutomaticPotato:
    def parent_dir(self):
        return os.path.dirname(__file__)

    def public_dir(self):
        pd = self.parent_dir()
        return os.path.abspath(os.path.join(pd, '../../public'))

    def potatoes(self):
        return os.listdir(self.public_dir())

    def random_potato(self):
        return random.choice(self.potatoes())

    def full_path(self):
        return os.path.join(self.public_dir(), self.random_potato())
