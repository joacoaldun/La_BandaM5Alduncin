const express = require('express')
const app = express()
const puerto = process.env.PORT
const path = require('path');
console.log('Joaquin probando')
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login')
});
        
app.get('/registro', (req, res) => {
     res.render('registro')
    });

     app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})