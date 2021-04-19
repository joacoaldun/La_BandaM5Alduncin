const express = require('express')

const app = express()

const puerto = process.env.PORT

const path = require('path');

console.log('Joaquin probando')

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');




app.use(express.static('public'));



app.set('view engine', 'ejs')


app.use('/', homeRouter);
//app.use('/', userRouter);
app.use('/products', productRouter);



app.get('/login', (req, res) => {
    res.render('login')
});
        
app.get('/registro', (req, res) => {
     res.render('registro')
    });

     app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})