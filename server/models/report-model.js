import db from './mockdb';

class Report {
    constructor(attr) {
        Report.count += 1;
        this.id = Report.count;
        this.type = attr.type;
        this.location = atrr.location;
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
}
Report.table = db.reportRecord;
Report.count = db.reportRecord.length;

export default Report;