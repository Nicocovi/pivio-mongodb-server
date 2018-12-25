module.exports = serviceRoutes;

function serviceRoutes() {

    var serviceController = require('./serviceController');
    var router = require('express').Router();
    var unless = require('express-unless');

    router.route('/')
        .post(serviceController.postService);

    router.route('/:service_id')
        .get(serviceController.getService)
        .put(serviceController.putService)
        .delete(serviceController.deleteService);

    //custom middleware to pass id
    router.use('/:service_id', function (req, res, next) {
        res.locals.service_id = req.params.service_id;
        next();
    });
	
    return router;
}