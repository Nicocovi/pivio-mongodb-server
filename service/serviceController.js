// importing Softwaredependency model
var Service = require('./serviceSchema');

exports.postService = function (req, res) {
    var service = new Service(req.body);
    service.save(function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(m);
    });
};

exports.getService = function (req, res) {
    Service.findById(req.params.service_id, function (err, service) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(service);
    });
};

exports.putService = function (req, res) {
    Service.findByIdAndUpdate(
        req.params.service_id,
        req.body, {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        },
        function (err, service) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.json(service);
        });
};

exports.deleteService = function (req, res) {
    Service.findById(req.params.service_id, function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        m.remove();
        res.sendStatus(200);
    });
};