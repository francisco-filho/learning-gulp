var http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan');

if (app.get('env') == 'production'){
    
}

app.set('port',3030);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'src/views'));

app.use(logger('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', function(req, res){
    res.render('index',{});
});


http.createServer(app).listen(app.get('port'),function(){
    console.log('Server started...');
});
