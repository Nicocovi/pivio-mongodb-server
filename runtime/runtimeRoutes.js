module.exports = runtimeRoutes;

function runtimeRoutes() {

    var runtimeController = require('./runtimeController');
    var router = require('express').Router();
    var unless = require('express-unless');

    router.route('/')
        .post(runtimeController.postRuntime);

    router.route('/:runtime_id')
        .get(runtimeController.getRuntime)
        .put(runtimeController.putRuntime)
        .delete(runtimeController.deleteRuntime);

    //custom middleware to pass id
    router.use('/:runtime_id', function (req, res, next) {
        res.locals.runtime_id = req.params.runtime_id;
        next();
    });
	
    return router;
}