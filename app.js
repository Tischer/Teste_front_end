//Imports
const express = require('express');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
const { json } = require('body-parser');
const home = require('./routes/home');

//Configurations

//Express

var gateway = 8081;
const app = express();

//Body parser

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Handle bars

app.engine("handlebars", handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set("view engine", "handlebars");

//Public

app.use(express.static(path.join(__dirname, "./public")))

//Routes

app.use('/', home);

//Start server

app.listen(gateway, () => {
    console.log("Servidor rodando em http://localhost:" + gateway);
});