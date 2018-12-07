"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportModel = require("../models/report-model");

var _reportModel2 = _interopRequireDefault(_reportModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteReport = function deleteReport(req, res, next) {
    var reportId = parseInt(req.params.id, 10);
    var report = _reportModel2.default.removeById(reportId);
    if (report) {
        return res.json({
            status: 200,
            id: reportId,
            message: "red flag has been deleted"
        });
    }
    return res.json({
        status: 404,
        message: "Not found"
    });
};

exports.default = deleteReport;