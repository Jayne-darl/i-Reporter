import reportRecord from '../models/report-model';

class Report {

    static create(req, res) {
        if (!req.body.type || !req.body.location || !req.body.comment) {
            return res.json({ status: 400, Error: 'Fill in the required fields' })
        }
        if (typeof req.body.type !== "string" || typeof req.body.location !== "string" || typeof req.body.comment !== "string") {
            return res.json({ status: 400, Error: 'Invalid content type' })
        }
        const record = req.body;
        const report = reportRecord.push(record);
        return res.json({
            Status: 201, "data": [
                {
                    id: record.id,
                    message: 'created red flag'
                }
            ]
        });

    }
}

export default Report;
