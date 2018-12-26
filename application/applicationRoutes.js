module.exports = applicationRoutes;


function applicationRoutes() {

    var applicationController = require('./applicationController');
    var router = require('express').Router();
	
	console.log("in applicationRoutes");

    router.route('/')
        .post(applicationController.postApplication)
        .get(applicationController.getApplications);

    router.route('/:application_id')
        .get(applicationController.getApplication)
        .put(applicationController.putApplication)
        .delete(applicationController.deleteApplication);

    //custom middleware to pass trip id
    router.use('/:application_id', function (req, res, next) {
        res.locals.application_id = req.params.application_id;
        next();
    });
	
    return router;
}
