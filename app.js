import express from 'express'
import routes from './routes/routing.js';
import { join } from 'path';
import bodyParser from "body-parser";

const app=express();
const port=process.env.PORT||3000;
app.use(express.json());
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(process.cwd(),'public')))
app.use('/',routes)
app.listen(port);