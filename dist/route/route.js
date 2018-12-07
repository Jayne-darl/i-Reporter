'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reportController = require('../controllers/reportController');

var _reportController2 = _interopRequireDefault(_reportController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();
// import path from 'path';


routes.get('/api/v1/reports', _reportController2.default.getAll);
routes.get('/api/v1/reports/:id', _reportController2.default.getOne);
routes.post('/api/v1/reports', _reportController2.default.create);
routes.patch('/api/v1/reports/:id/comment', _reportController2.default.update);
routes.patch('/api/v1/reports/:id/location', _reportController2.default.update);
routes.delete('/api/v1/reports/:id', _reportController2.default.delete);

exports.default = routes;