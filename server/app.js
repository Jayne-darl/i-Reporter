import express from 'express';

const app = express()

app.use(express.json())

// import Report from './controllers/report-controller';
// app.post('/api/v1/reports', Report.create);

export default app;
