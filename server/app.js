import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import incidentsRoutes from './routes/incidentsRoute';
import usersRoutes from './routes/usersRoute';

const app = express();

// parse req.body content
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json())

//  Enable CORS for the express server
app.use(cors());
app.options('*', cors());

app.use(logger('dev')); // Log requests to the console.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/incidents', incidentsRoutes);
app.use('/api/v1/users', usersRoutes);

export default app;
