import express from 'express';
// import path from 'path';
import postReports from '../controllers/PostReports';
import getAllReports from '../controllers/getAllReports';
import getOneReport from '../controllers/getOneReport';
import deleteReport from '../controllers/deleteReport';

const routes = express.Router();


routes.post('/api/v1/reports', postReports);
routes.get('api/v1/reports', getAllReports);
routes.get('api/v1/reports/:id', getOneReport);
routes.delete('api/v1/reports/:id', deleteReport)

export default routes;