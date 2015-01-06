
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  ,  abc = require('./routes/abc')
  , products= require ('./routes/products') 
  ,   laptop =require('./routes/laptop')
  , contacts=require('./routes/contacts')
  , about=require('./routes/about')
  
  ,  lenovo=require('./routes/lenovo')
  
  , car = require('./routes/car')
  , mobile = require('./routes/mobile')


, bodyParser = require('body-parser');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/App');
module.exports=db;

var app = express();

// all environments
app.set('port', process.env.PORT ||3700);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Make our db accessible to our router
app.use(function(req,res,next)
{
    req.db = db;
    next();
});


// development only
/*if ('development' == app.get('env'))
{
  app.use(express.errorHandler());
}*/

app.get('/second',function(req,res)
		{
		res.render('second',{});
		});


app.get('/userlist',routes.xyz);
app.get('/', routes.index);
app.get('/xyz', user.list);
app.get('/products',products.pro);
app.get('/contacts',contacts.con   );
app.get('/about',about.abo   );

//app.get('/laptop',laptop.lap);
app.get('/laptop',products.len2);
app.get('/lenovo/:id',products.len);

//app.get('/car',car.ca);
app.get('/car',products.ca2);
app.get('/bmw/:id',products.ca);


app.get('/mobile',products.mobi2);
app.get('/lg/:id',products.mobi);








http.createServer(app).listen(app.get('port'), function()
{  console.log('Express server listening on port ' + app.get('port'));

module.exports = app;
});