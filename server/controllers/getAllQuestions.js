import Report from '../models/report-model';

const getAllQuestions = (req, res, next) => {
    return res.json({
        status: 200,
        data: Report.all(),
    });
}

export default getAllQuestions;