import Report from '../models/reportModel';

const ReportController = {

    create(req, res, next) {
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
    },

    getAll(req, res, next) {
        const reports = Report.all();
        return res.json({
            status: 200,
            data: reports,
        });
    },

    getOne(req, res, next) {
        const reportId = parseInt(req.params.id, 10);
        const report = Report.findById(reportId);
        if (report) {
            return res.json({
                status: 200,
                data: [report],
            });
        }
        return res.json({
            status: 404,
            message: "Not found",
        })

    },

    update(req, res, next) {
        const reportId = Report.findById(req.params.id);
        if (!reportId) {
            return res.json({
                status: 404,
                message: "report not found."
            });
        }
        if (reportId) {
            const updatedReport = Report.update(req.params.id, req.body)
            if (req.body === updatedReport.comment)

                return res.json({
                    status: 200,
                    data: [
                        {
                            id: updatedReport.id,
                            message: "updated red flag's Comment",

                        }
                    ]
                });
        }
    },

    delete(req, res, next) {
        const reportId = parseInt(req.params.id, 10);
        const report = Report.removeById(reportId)
        if (report) {
            return res.json({
                status: 204,
                id: reportId,
                message: "red flag has been deleted",
            });
        }
        return res.json({
            status: 404,
            message: "Not found",
        });

    }
}

export default ReportController;
