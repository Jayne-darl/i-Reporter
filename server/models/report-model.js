import moment from 'moment';
import uuid from 'uuid';

class Report {
    constructor() {
        this.reports = [];
    }
    create(record) {
        const newReport = {
            id: uuid.v4(),
            createdAt: moment.now(),
            createdBy: record.id,
            type: record.type || '',
            location: record.location || '',
            status: record.status || '',
            images: record.images || '',
            videos: record.videos || '',
            comment: record.comment || '',
            updatedAt: moment.now()
        };
        this.reports.push(newReport);
        return newReport;
    }
}

module.exports = new Report();