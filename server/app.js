import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();

// parse req.body content
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())
//app.use(express.json())

app.use('', routes);

export default app;
