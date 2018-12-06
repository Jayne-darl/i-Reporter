import express from 'express';
// import path from 'path';
import postReports from '../controllers/PostReports';
import getAllReports from '../controllers/getAllReports';
import getOneReport from '../controllers/getOneReport';
import deleteReport from '../controllers/deleteReport';
import updateLocation from '../controllers/updateLocation';
import updateComment from '../controllers/updateComment';

const routes = express.Router();

routes.get('/api/v1/reports', getAllReports);
routes.get('/api/v1/reports/:id', getOneReport);
routes.post('/api/v1/reports', postReports);
routes.patch('/api/v1/reports/:id/comment', updateComment)
routes.patch('/api/v1/reports/:id/location', updateLocation)
routes.delete('/api/v1/reports/:id', deleteReport)

export default routes;