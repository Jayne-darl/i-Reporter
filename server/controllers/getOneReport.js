import Report from '../models/report-model';

const getOneReport = (req, res, next) => {
    const reportId = parseInt(req.params.id, 10);
    if (report = Report.findById(reportId)) {
        return res.json({
            status: 200,
            data: [report],
        });
    }
    return res.json({
        status: 404,
        message: "Not found",
    })

}

export default getOneReport;