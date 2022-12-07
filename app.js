const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());
//ROutes  
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute)


app.get('/',(req,res)=>{
   res.send("hi");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true},()=>
   console.log('Connected to DB') 
);


app.listen(3000); 