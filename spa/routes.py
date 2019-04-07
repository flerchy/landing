from spa.views import index, eng, stuff


def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_get('/english/', eng)
    app.router.add_get('/stuff/', stuff)
