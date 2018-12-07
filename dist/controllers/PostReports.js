'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportModel = require('../models/report-model');

var _reportModel2 = _interopRequireDefault(_reportModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postReport = function postReport(req, res, next) {
    var record = req.body;
    if (!record.type || !record.location || !record.comment) {
        return res.json({ status: 400, Error: 'Fill in the required fields' });
    } else if (typeof record.type !== "string" || typeof record.location !== "string" || typeof record.comment !== "string") {
        return res.json({ status: 400, Error: 'Invalid content type' });
    }

    var newReport = _reportModel2.default.create(record);
    return res.json({
        Status: 201,
        data: [{
            id: newReport.id,
            message: 'created red flag'
        }]
    });
};

exports.default = postReport;