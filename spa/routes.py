from spa.views import index, eng


def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_get('/english/', eng)
