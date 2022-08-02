const express = require('express');
const app = express();

const connection = require('./db/connection');
require('dotenv/config');
var bodyParser = require('body-parser');
var path = require('path');

const cors = require("cors");
app.use(cors());
const multer = require("multer");
const fs= require('fs')

connection.once('open', ()=>{
    const server = app.listen(process.env.PORT || 8081, ()=>{
    console.log("Connected and listening");
    });
});

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

const Book = require('./models/book.js');
const { request } = require('express');

//Multer

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })

// const upload = multer({storage:storage})

app.post('/api/book',/*upload.single('image')*/(req,res)=>{
    const book = new Book({
        title: req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        des:req.body.des,
        rating:req.body.rating,

        // img:{
        //     data:fs.readFileSync("uploads/"+ req.file.filename),
        //     contentType:"image/png"

        // }
    })
    book.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
})


app.get('/api/book', (req,res)=>{

    Book.find({})
    .exec((error,result) =>{
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result);
        }
    })
    
});


app.get("/",(req,res)=>{
    res.render("index");
});





