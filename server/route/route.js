import express from 'express';
// import path from 'path';
import postQuestion from '../controllers/PostQuestions';
import getAllQuestions from '../controllers/getAllQuestions';

const routes = express.Router();


routes.post('/api/v1/reports', postQuestion);
routes.get('api/v1/reports', getAllQuestions);

export default routes;