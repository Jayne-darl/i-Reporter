"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = {
    reportRecord: [{
        id: 1,
        createdOn: new Date(),
        createdBy: _faker2.default.name.findName(),
        type: "red flag",
        location: _faker2.default.address.longitude() + ", " + _faker2.default.address.lattitude + "}",
        status: "rejected",
        images: [_faker2.default.image.avatar()],
        videos: [],
        comment: _faker2.default.lorem.sentences,
        updatedAt: new Date()
    }, {
        id: 2,
        createdOn: new Date(),
        createdBy: _faker2.default.name.findName(),
        type: "red flag",
        location: _faker2.default.address.longitude() + ", " + _faker2.default.address.lattitude + "}",
        status: "rejected",
        images: [_faker2.default.image.avatar()],
        videos: [],
        comment: _faker2.default.lorem.sentences,
        updatedAt: new Date()
    }, {
        id: 3,
        createdOn: new Date(),
        createdBy: _faker2.default.name.findName(),
        type: "red flag",
        location: _faker2.default.address.longitude() + ", " + _faker2.default.address.lattitude + "}",
        status: "rejected",
        images: [_faker2.default.image.avatar()],
        videos: [],
        comment: _faker2.default.lorem.sentences,
        updatedAt: new Date()
    }]
};
exports.default = db;