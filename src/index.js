const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://AmnMishra777:ZwLJNlmaLi3ga4GF@cluster0.9xjau.mongodb.net/aman7=")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
