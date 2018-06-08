const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// app.use((req, res, next) => {
//     res.render('maitenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',        
        wellcomeMessage: 'Well come to node web site'
    })    
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageTitle: 'About Page',      
   });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Bad request'
    })
})
app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});