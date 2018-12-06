import express from 'express';
// import path from 'path';
import postReports from '../controllers/PostReports';
import getAllReports from '../controllers/getAllReports';
import getOneReport from '../controllers/getOneReport';

const routes = express.Router();


routes.post('/api/v1/reports', postReports);
routes.get('api/v1/reports', getAllReports);
routes.get('api/v1/reports/:id', getOneReport);
export default routes;