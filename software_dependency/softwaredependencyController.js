// importing Softwaredependency model
var Softwaredependency = require('./softwaredependendencySchema');

exports.postSoftwaredependency = function (req, res) {
    var softwaredependendency = new Softwaredependency(req.body);
    softwaredependendency.save(function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(m);
    });
};

exports.getSoftwaredependency = function (req, res) {
    Softwaredependency.findById(req.params.runtime_id, function (err, softwaredependendency) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(softwaredependendency);
    });
};

exports.putSoftwaredependency = function (req, res) {
    Softwaredependency.findByIdAndUpdate(
        req.params.softwaredependendency_id,
        req.body, {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        },
        function (err, softwaredependendency) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.json(softwaredependendency);
        });
};

exports.deleteSoftwaredependency = function (req, res) {
    Softwaredependency.findById(req.params.softwaredependendency_id, function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        m.remove();
        res.sendStatus(200);
    });
};