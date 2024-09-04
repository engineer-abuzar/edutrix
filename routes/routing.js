import express from 'express';
import { landing } from '../controller/controll.js';
import { registration } from '../controller/controll.js';
import { login } from '../controller/controll.js';
import { courses } from '../controller/controll.js';
import { registration_submit } from '../controller/controll.js';
import {login_from_db} from '../controller/controll.js'
const route=express.Router();
route.get('/',landing)
route.get('/registration',registration)
route.get('/login',login)
route.get('/courses',courses)
route.post('/registration',registration_submit)
route.post('/login',login_from_db);
export default route;