var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

// app.use signifies using middleware
app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
// remove root route after declaring public static path
// app.get('/', function(req, res){
//     console.log("GET the homepage");
//     res
//         .status(200)
//         .sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/json', function(req, res){
    console.log("GET the json");
    res
        .status(200)
        .json( {"jsonDaata": true} );
});

app.get('/file', function(req, res){
    console.log("GET the file");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("\nMagic happens on port " + port);
});


// console.log("\n app.listen() is running asychronously because this message appears first, before Magic happens...")
