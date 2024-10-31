import {join} from 'path'
import db from '../config/db.js'
const register_student=(req,res)=>{
    const {email,password,mobile}=req.body;
    const user=req.body['user-selection']
    
}