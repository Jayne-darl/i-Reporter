import Report from '../models/report-model';

const getAllReports = (req, res, next) => {
    return res.json({
        status: 200,
        data: Report.all(),
    });
}

export default getAllReports;