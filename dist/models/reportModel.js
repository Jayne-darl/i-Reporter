'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mockdb = require('./mockdb');

var _mockdb2 = _interopRequireDefault(_mockdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Report = function () {
    function Report(attr) {
        _classCallCheck(this, Report);

        Report.count += 1;
        this.id = Report.count;
        this.type = attr.type;
        this.location = attr.location;
        this.image = attr.image;
        this.video = attr.video;
        this.comment = attr.comment;
    }

    _createClass(Report, null, [{
        key: 'create',
        value: function create(attr) {
            var redFlag = new Report(attr);
            Report.table.push(redFlag);
            return redFlag;
        }
    }, {
        key: 'all',
        value: function all() {
            return Report.table;
        }
    }, {
        key: 'findById',
        value: function findById(id) {
            return Report.table.find(function (report) {
                return report.id === id;
            });
        }
    }, {
        key: 'removeById',
        value: function removeById(id) {
            var report = this.findById(id);
            var index = Report.table.indexOf(report);
            Report.table.splice(index, 1);
            return {};
        }
    }, {
        key: 'update',
        value: function update(id, data) {
            var report = this.findById(id);
            var index = Report.table.indexOf(report);
            Report.table[index].location = data['location'] || Report.location;
            Report.table[index].comment = data['comment'] || Report.comment;
            Report.table[index].updatedAt = new Date();
            return Report.table[index];
        }
    }]);

    return Report;
}();

Report.table = _mockdb2.default.reportRecord;
Report.count = _mockdb2.default.reportRecord.length;

exports.default = Report;