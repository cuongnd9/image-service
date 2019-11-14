import dotenv from 'dotenv';
import express, { Application } from 'express';
import bodyParser from 'body-parser';

// Config dotenv.
dotenv.config();

// Create a new express application instance.
const app: Application = express();

// Use body parser.
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get('/', function(_, res) {
  res.send('Xin chào 👋');
});

export default app;
