"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// if (!module.parent) server.listen(3000);
// console.log('app running on port ', 3000);

var port = process.env.PORT || 3000;
_app2.default.listen(port, function () {
    console.log('app running on port 3000');
});