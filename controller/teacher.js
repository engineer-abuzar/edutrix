import { join } from 'path'
import db from '../config/db.js'
import { user_name } from './controll.js';


const mycourses=(async (req,res)=>{
    const query=`select c_name,c_description,teacher_name,join_date from course where teacher_name="${user_name}";`;
const result=(await db.query(query))[0];

    res.render(join(process.cwd(),'views','Teacher','course-management'),{data:result});
    
})
const students=(req,res)=>{
    res.render(join(process.cwd(),'views','Teacher','students'));
}
export { students}
export { mycourses }
