import db from './mockdb';

class Report {
    constructor(attr) {
        Report.count += 1;
        this.id = Report.count;
        this.type = attr.type;
        this.location = attr.location;
        this.image = attr.image;
        this.video = attr.video;
        this.comment = attr.comment;
    }

    static create(attr) {
        const redFlag = new Report(attr);
        Report.table.push(redFlag);
        return redFlag;
    }

    static all() {
        return Report.table;
    }

    static findById(id) {
        return Report.table.find(report => report.id === id);
    }

    static removeById(id) {
        const report = this.findById(id);
        const index = Report.table.indexOf(report);
        Report.table.splice(index, 1);
        return {};
    }

    static update(id, data) {
        const report = this.findById(id);
        const index = Report.table.indexOf(report);
        Report.table[index].location = data['location'] || Report.location;
        Report.table[index].comment = data['comment'] || Report.comment;
        Report.table[index].updatedAt = new Date();
        return Report.table[index];

    }
}

Report.table = db.reportRecord;
Report.count = db.reportRecord.length;

export default Report;