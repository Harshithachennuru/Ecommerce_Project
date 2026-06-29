const express = require('express');
const app = express();
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors({origin:'*'}));
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server started running on port 3000")
})

app.get('/', (req,res)=>{
    res.send("get is activated")
    console.log("Hello")
})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Harshi@2006',
    database:'ecommerce'
})

db.connect((err)=>{
    if(err){
        console.log("error occurred")
    }
    console.log("connected to database")
})

app.post('/signup', (req,res)=>{
    console.log('entered')
    let email = req.body.email;
    let password = req.body.password;
    let userRole = req.body.userRole;
    let confirmPassword = req.body.confirmPassword;
    console.log(req.body);
    console.log(userRole);
    console.log(password);
    console.log(confirmPassword)
    if(password == confirmPassword){
        db.query(`insert into users(email,password,userRole) values(?,?,?)`,[email,password,userRole],(err,result)=>{
            if(err){
                res.send('Error inserting data into the database:',err);
                console.log('Error inserting data into the database',err);
                return;
            }
            res.send("registered successfully")
        })
    }
    else{
        res.send("Password does not match")
    }
})

app.post('/login',(req,res)=>{

    let email = req.body.email;
    let password = req.body.password;
    let userRole = req.body.userRole;

    db.query(
        `select * from users where email = ?`,[email],(err,result)=>{
            if(err){
                console.log("error querying the database");
                return res.send("error querying database");
            }
            if(result.length === 0){
                return res.send("invalid credentials");
            }
            const user = result[0];
            console.log(user.userRole)
            console.log(userRole)
            if(password === user.password && userRole === user.userRole){
                if(user.userRole ==="Admin"){
                    res.send("Admin logged in successfully")
                }
                else{
                    res.send("User logged in successfully")
                }
            }
            else{
                return res.send("invalid credentials");
            }
        }
    )
})