import express from 'express';
import bodyParser from 'body-parser';
import routes from './route/route';

const app = express();

// parse req.body content
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
//app.use(express.json())

app.use('', routes);

export default app;
