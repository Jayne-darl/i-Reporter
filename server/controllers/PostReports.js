import Report from '../models/report-model';

const postReport = (req, res, next) => {
    if (!req.body.type || !req.body.location || !req.body.comment) {
        return res.json({ status: 400, Error: 'Fill in the required fields' })
    }
    if (typeof req.body.type !== "string" || typeof req.body.location !== "string" || typeof req.body.comment !== "string" || typeof req.body.image !== "image" || req.body.video !== "video") {
        return res.json({ status: 400, Error: 'Invalid content type' })
    }
    const record = req.body;
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
