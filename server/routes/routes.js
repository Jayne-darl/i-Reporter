import express from 'express';
// import path from 'path';
import reportController from '../controllers/reportController';

const routes = express.Router();

routes.get('/api/v1/reports', reportController.getAll);
routes.get('/api/v1/reports/:id', reportController.getOne);
routes.post('/api/v1/reports', reportController.create);
routes.patch('/api/v1/reports/:id/comment', reportController.update)
routes.patch('/api/v1/reports/:id/location', reportController.update)
routes.delete('/api/v1/reports/:id', reportController.delete)

export default routes;