import ReportModel from '../models/Report-model';

class Report {

    create(req, res) {
        if (!req.body.type || !req.body.location || !req.body.comment) {
            return res.status(400).json({ Error: 'Fill in the required fields' })
        }
        if (typeof req.body.type !== "string" || typeof req.body.location !== "string" || typeof req.body.comment !== "string") {
            return res.status(400).json({ Error: 'Invalid content type' })
        }
        const report = ReportModel.create(req.body);
        return res.status(201).json({ Success: 'Created successfully', Report: report });

    }
}

module.exports = new Report();