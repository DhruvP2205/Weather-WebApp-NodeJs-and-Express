const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const { env } = require('process');
const port = process.env.PORT || 8000;

const publicPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views',templatePath);

hbs.registerPartials(partialPath);

app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.render("index");
});

app.get('/about', (req,res) => {
    res.render("about");
});

app.get('/weather', (req,res) => {
    res.render("weather");
});

app.get('*', (req,res) => {
    res.render("404",{
        errorMsg: 'Oops! Page Not Found',
    });
});

app.listen(port, ()=>{
    console.log(`Port listning ${port}`);
});