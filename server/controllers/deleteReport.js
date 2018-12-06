import Report from '../models/report-model';

const deleteReport = (req, res, next) => {
    const reportId = parseInt(req.params.id, 10);
    if (report = Report.removeById(reportId)) {
        return res.json({
            status: 200,
            id: reportId,
            message: "red flag has been deleted",
        });
    }
    return res.json({
        status: 404,
        message: "Not found",
    });

}

export default deleteReport;