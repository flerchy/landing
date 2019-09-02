import aiohttp_jinja2
import jinja2
from aiohttp import web
from spa.routes import setup_routes
import os


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = web.Application()
setup_routes(app)

aiohttp_jinja2.setup(app,
                     loader=jinja2.FileSystemLoader(os.path.join(BASE_DIR, 'templates')))


def setup_static_routes(app):
    app.router.add_static('/static',
                          path=os.path.join(BASE_DIR, 'static'),
                          name='static')


setup_static_routes(app)

web.run_app(app)
