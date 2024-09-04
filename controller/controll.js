import { join } from "path"
import db from '../config/db.js'
const landing = (req, res) => {
    res.render(join(process.cwd(), 'views', 'index'));
}
const registration = (req, res) => {
    res.render(join(process.cwd(), 'views', 'registration'));
}
const login = (req, res) => {
    res.render(join(process.cwd(), 'views', 'login'));
}
const courses = (req, res) => {
    res.render(join(process.cwd(), 'views', 'courses'));
}
const registration_submit = (req, res) => {

    const { fname, lname, email, password, mobile, add } = req.body;
    const query = `insert into contact values ("${fname}","${lname}","${email}","${password}",${mobile},"${add}")`;

    console.log(db.query(query));
    res.redirect('/');
}
const login_from_db=(req,res)=>{
    const {email,password}=req.body;
    func();
    async function func() {
       const responsEmail=await db.query('select email from contact');
       const responsPassword=await db.query('select password from contact');
       const email_from_db=responsEmail[0];
       const password_from_db=responsPassword[0];
      for(let i=0;i<email_from_db.length;i++){
        if(email_from_db[i].email==email)
        {
            for(let j=0;j<password_from_db.length;j++){
                if(password_from_db[j].password==password)
                  return  res.render(join(process.cwd(), 'views', 'index'));
            }
        }
      }
       
    }
    
}

export { courses }
export { landing }
export { login }
export { registration }
export { registration_submit }
export {login_from_db}