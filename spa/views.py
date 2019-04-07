import aiohttp_jinja2 as aiohttp_jinja2
from aiohttp import web


@aiohttp_jinja2.template('index.html')
async def index(request):
    return {'ok': 0}


@aiohttp_jinja2.template('index_eng.html')
async def eng(request):
    return {'ok': 0}


@aiohttp_jinja2.template('stuff.html')
async def stuff(request):
    return {'ok': 0}
