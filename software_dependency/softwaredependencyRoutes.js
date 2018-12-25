module.exports = softwaredependencyRoutes;

function softwaredependencyRoutes() {

    var softwaredependencyController = require('./softwaredependencyController');
    var router = require('express').Router();
    var unless = require('express-unless');

    router.route('/')
        .post(softwaredependencyController.postSoftwaredependency);

    router.route('/:softwaredependency_id')
        .get(softwaredependencyController.getSoftwaredependency)
        .put(softwaredependencyController.putSoftwaredependency)
        .delete(softwaredependencyController.deleteSoftwaredependency);

    //custom middleware to pass id
    router.use('/:softwaredependency_id', function (req, res, next) {
        res.locals.softwaredependency_id = req.params.softwaredependency_id;
        next();
    });
	
    return router;
}