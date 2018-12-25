module.exports = documentRoutes;


function documentRoutes() {

    var documentController = require('./documentController');
    var router = require('express').Router();

    router.route('/')
        .post(documentController.postDocument)
        .get(documentController.getDocuments);

    router.route('/:document_id')
        .get(documentController.getDocument)
        .put(documentController.putDocument)
        .delete(documentController.deleteDocument);

    //custom middleware to pass trip id
    router.use('/:document_id', function (req, res, next) {
        res.locals.document_id = req.params.document_id;
        next();
    });
	
    return router;
}
