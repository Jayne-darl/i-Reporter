import express from 'express';
// import path from 'path';
import Report from '../controllers/report-controller';

const routes = express.Router();


routes.post('/api/v1/reports', Report.create);
export default routes;