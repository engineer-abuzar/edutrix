import { join } from "path"
import db from '../config/db.js'
import jwt from "jsonwebtoken";
let user_name;
const landing = (req, res) => {
    res.render(join(process.cwd(), 'views', 'landing-page'));
}
const registration = (req, res) => {
    res.render(join(process.cwd(), 'views','common', 'registration'),{error:''});
    
}
const login = (req, res) => {
    res.render(join(process.cwd(), 'views', 'common','login'),{data:''});
}
const courses = (req, res) => {
    res.render(join(process.cwd(), 'views', 'common','courses'));
}


const loginTeacher=(req,res)=>{
    res.render(join(process.cwd(),'views','Teacher','homepage-teacher'))
}
const loginStudent=(req,res)=>{
    res.render(join(process.cwd(),'views','user','homepage-user'))
}
const coursePlayer=(req,res)=>{
    res.render(join(process.cwd(),'views','user','course-player'))
}
const register = (async (req, res) => {
    const {name, email, password, mobile } = req.body
    const user = req.body['user-selection']

    const query = `insert into ${user}_details (name,email,password,mobile) values("${name}","${email}","${password}",${mobile})`

    try {
        await db.query(query)
    } catch (err) {
        if (err.errno == 1062) {
            err = "User already registered!!"
        }
        res.render(join(process.cwd(), 'views', 'common', 'registration'), { error: `${err}` });

    }
    res.render(join(process.cwd(), 'views', 'common', 'registration'), { error: 'User created Successfully' });


})
const login_teacher = (async (req, res) => {
    const { email, password } = req.body;
    const user_selection = req.body['user-selection']
    const query1 = `select email from ${user_selection}_details`;
    const query2 = `select password from ${user_selection}_details`;
    const query3=`select name from ${user_selection}_details where email="${email}"`;
    user_name=(await db.query(query3))[0][0].name;
    

    let respons_email = (await db.query(query1))[0];
    let respons_password = (await db.query(query2))[0];
let i=0;
let j=0;
    let result;
  (  async function(){
    for(i=0;i<respons_email.length;i++){
        if (email == respons_email[i].email) {
           for(j=0;j<respons_password.length;j++){
                if (password == respons_password[j].password) {
                    result = "welcome ${email}";
                    const query3 = `select name from ${user_selection}_details where email="${email}"`
                    let name_user;
                  name_user= (await db.query(query3))[0][0].name
                    
                    if (user_selection == 'Teacher')
                         return res.render(join(process.cwd(), 'views', 'teacher', 'homepage-teacher'), { name: `${name_user}`,email:`${email}` })
                        
                    else
                    
                        return res.render(join(process.cwd(), 'views', 'user', 'homepage-user'), { name: `${name_user}`,email:`${email}` }) 

                }
            }
            return res.render(join(process.cwd(), 'views', 'common', 'login'), { data: `Password is not correct!!` }) 
        }

    }
    return res.render(join(process.cwd(), 'views', 'common', 'login'), { data: `Not a valid user!!` })
})();
    
})
export {register}
export {loginTeacher}
export {coursePlayer}
export {loginStudent}
export { courses }
export { landing }
export { login }
export { registration }
export {user_name}
export {login_teacher}