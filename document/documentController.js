// importing Document model
var Document = require('./documentSchema');

exports.getDocuments = function (req, res) {
    var query = {
        document: res.locals.document_id
    };
    //query.activityID = req.query.activityID;
    DOcument.find(query, function (err, documents) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(documents);
    });
};

exports.postDocument = function (req, res) {
    var document = new Document(req.body);
    document.save(function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).json(m);
    });
};

exports.getDocument = function (req, res) {
    Document.findById(req.params.document_id, function (err, document) {
        if (err) {
            res.status(400).send(err)
            return;
        };

        res.json(document);
    });
};

exports.putDocument = function (req, res) {
    Document.findByIdAndUpdate(
        req.params.document_id,
        req.body, {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        },
        function (err, document) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.json(document);
        });
};

exports.deleteDocument = function (req, res) {
    Document.findById(req.params.document_id, function (err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        m.remove();
        res.sendStatus(200);
    });
};
