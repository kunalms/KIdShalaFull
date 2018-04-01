var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

var cors = require('cors');



var app = express();
app.set('view engine', 'ejs');

app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/public')));

//mongoose connection
mongoose.connect('mongodb://localhost:27017/kidshala');

mongoose.connection.on('connected',()=>{
	console.log('connected to database');

});
mongoose.connection.on('error',(error)=>{
	if(error){
		console.log('Error occured in connecting to database'+error);
	}
})

require('./models/rating');

var index = require('./routes/index');
var user = require('./routes/user');
var object = require('./routes/object');
var category = require('./routes/category');


//routes configuration
app.use('/', index);
app.use('/api/user', user);
app.use('/api/object', object);
app.use('/api/category', category);

app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'/public/index.html'));
});


module.exports = app;
