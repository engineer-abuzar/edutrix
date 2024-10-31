import express from 'express';
import { landing } from '../controller/controll.js';
import { registration } from '../controller/controll.js';
import { login } from '../controller/controll.js';
import { courses } from '../controller/controll.js';


import {loginTeacher} from '../controller/controll.js'
import {loginStudent} from '../controller/controll.js'
import {coursePlayer} from '../controller/controll.js'
import {register} from '../controller/controll.js'
import {login_teacher} from '../controller/controll.js'
import {mycourses} from '../controller/teacher.js'
import {students} from '../controller/teacher.js'
const route=express.Router();
route.get('/',landing)
route.get('/registration',registration)
route.get('/login',login)
route.get('/courses',courses)
// route.get('/login/teacher',loginTeacher)
route.get('/login/student',loginStudent)
// route.post('/login',login_from_db);
route.get('/login/student/js',coursePlayer)
route.post('/registration/submit',register)
route.post('/login/teacher',login_teacher)
route.get('/login/teacher/mycourses',mycourses)
route.get('/login/teacher/students',students)
export default route;