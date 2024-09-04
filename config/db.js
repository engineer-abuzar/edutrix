import mysql from 'mysql2/promise';
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'husna34',
    database:"employee"
})
export default db;