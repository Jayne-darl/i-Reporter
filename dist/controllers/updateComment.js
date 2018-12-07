"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportModel = require("../models/report-model");

var _reportModel2 = _interopRequireDefault(_reportModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateComment = function updateComment(req, res, next) {
    var reportId = _reportModel2.default.findById(req.params.id);
    if (!reportId) {
        return res.json({
            status: 404,
            message: "report not found."
        });
    }
    var updatedReport = _reportModel2.default.updateByLocation(req.params.id, req.body);
    return res.json({
        status: 200,
        data: [{
            id: updatedReport.id,
            message: "updated red flag's Comment"

        }]
    });
};

exports.default = updateComment;