'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportModel = require('../models/report-model');

var _reportModel2 = _interopRequireDefault(_reportModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllReports = function getAllReports(req, res, next) {
    var reports = _reportModel2.default.all();
    return res.json({
        status: 200,
        data: reports
    });
};

exports.default = getAllReports;