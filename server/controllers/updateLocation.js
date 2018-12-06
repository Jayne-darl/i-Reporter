import Report from '../models/report-model';

const updateLocation = (req, res, next) => {
    const reportId = Report.findById(req.params.id);
    if (!reportId) {
        return res.json({
            status: 404,
            message: "report not found."
        })
    }
    const updatedReport = Report.updateByLocation(req.params.id, req.body)
    return res.json({
        status: 200,
        data: [
            {
                id: updatedReport.id,
                message: "updated red flag's location",

            }
        ]
    })
}

export default updateLocation;