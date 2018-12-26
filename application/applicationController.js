// importing application model
var Application = require('./applicationSchema');

exports.getApplications = function (req, res) {
    var query = {
        application: res.locals.application_id
    };
    //query.activityID = req.query.activityID;
    Application.find(query, function (err, applications) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(applications);
    });
};

exports.postApplication = function (req, res) {
    var application = new Application(req.body);
    application.save(function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(m);
    });
};

exports.getApplication = function (req, res) {
    Application.findById(req.params.application_id, function (err, application) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(application);
    });
};

exports.putApplication = function (req, res) {
    Application.findByIdAndUpdate(
        req.params.application_id,
        req.body, {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        },
        function (err, application) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.json(application);
        });
};

exports.deleteApplication = function (req, res) {
    Application.findById(req.params.application_id, function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        m.remove();
        res.sendStatus(200);
    });
};
