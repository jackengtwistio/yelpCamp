const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/yelp-camp')
const db = mongoose.connection
    .on('error', (err) => console.log(err))
    .once("open",()=>{
        console.log('database connection established')
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/',(req, res, next) =>{
    res.send('Welcome')

})

app.get('/home',(req, res, next) =>{
    res.render('home')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})