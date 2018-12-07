'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportModel = require('../models/reportModel');

var _reportModel2 = _interopRequireDefault(_reportModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportController = {
    create: function create(req, res, next) {
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
    },
    getAll: function getAll(req, res, next) {
        var reports = _reportModel2.default.all();
        return res.json({
            status: 200,
            data: reports
        });
    },
    getOne: function getOne(req, res, next) {
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
    },
    update: function update(req, res, next) {
        var reportId = _reportModel2.default.findById(req.params.id);
        if (!reportId) {
            return res.json({
                status: 404,
                message: "report not found."
            });
        }
        if (reportId) {
            var updatedReport = _reportModel2.default.update(req.params.id, req.body);
            if (req.body === updatedReport.comment) return res.json({
                status: 200,
                data: [{
                    id: updatedReport.id,
                    message: "updated red flag's Comment"

                }]
            });
        }
    },
    delete: function _delete(req, res, next) {
        var reportId = parseInt(req.params.id, 10);
        var report = _reportModel2.default.removeById(reportId);
        if (report) {
            return res.json({
                status: 204,
                id: reportId,
                message: "red flag has been deleted"
            });
        }
        return res.json({
            status: 404,
            message: "Not found"
        });
    }
};

exports.default = ReportController;