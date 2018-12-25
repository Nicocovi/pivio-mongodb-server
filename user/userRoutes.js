module.exports = userRoutes;

function userRoutes(passport) {

    var userController = require('./userController');
    var router = require('express').Router();

    var documentRoutes = require("../document/documentRoutes");
    router.use('/documents', documentRoutes(passport));

    router.post('/login', userController.login);
    router.post('/signup', userController.signup);
    router.post('/unregister', passport.authenticate('jwt', {
        session: false
    }), userController.unregister);

    router.get('/', userController.getUserByMail);
    router.get('/:user_id', userController.getUserById);

    return router;

}
