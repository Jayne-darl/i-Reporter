import Report from '../models/report-model';

const getAllReports = (req, res, next) => {
    const reports = Report.all();
    return res.json({
        status: 200,
        data: reports,
    });
}

export default getAllReports;