"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportModel = require("../models/report-model");

var _reportModel2 = _interopRequireDefault(_reportModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOneReport = function getOneReport(req, res, next) {
    var reportId = parseInt(req.params.id, 10);
    var report = _reportModel2.default.findById(reportId);
    if (report) {
        return res.json({
            status: 200,
            data: [report]
        });
    }
    return res.json({
        status: 404,
        message: "Not found"
    });
};

exports.default = getOneReport;