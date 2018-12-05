import express from 'express';
import bodyParser from 'body-parser';
import routes from './route/route';

const app = express();

// parse req.body content
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
//app.use(express.json())
app.use('', routes);

// import Report from './controllers/report-controller';
// app.post('/api/v1/reports', Report.create);

export default app;
