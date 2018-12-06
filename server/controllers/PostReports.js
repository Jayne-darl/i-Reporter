import Report from '../models/report-model';

const postReport = (req, res, next) => {
    const record = req.body;
    if (!record.type || !record.location || !record.comment) {
        return res.json({ status: 400, Error: 'Fill in the required fields' });
    }
    else if (typeof record.type !== "string" || typeof record.location !== "string" || typeof record.comment !== "string") {
        return res.json({ status: 400, Error: 'Invalid content type' });
    }

    const newReport = Report.create(record);
    return res.json({
        Status: 201,
        data: [
            {
                id: newReport.id,
                message: 'created red flag'
            }
        ]
    });

}


export default postReport;
