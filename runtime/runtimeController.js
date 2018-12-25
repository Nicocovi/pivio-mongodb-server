// importing Runtime model
var Runtime = require('./runtimeSchema');

exports.postRuntime = function (req, res) {
    var runtime = new Runtime(req.body);
    runtime.save(function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(m);
    });
};

exports.getRuntime = function (req, res) {
    Runtime.findById(req.params.runtime_id, function (err, runtime) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(runtime);
    });
};

exports.putRuntime = function (req, res) {
    Runtime.findByIdAndUpdate(
        req.params.runtime_id,
        req.body, {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        },
        function (err, runtime) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.json(runtime);
        });
};

exports.deleteRuntime = function (req, res) {
    Runtime.findById(req.params.runtime_id, function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        m.remove();
        res.sendStatus(200);
    });
};