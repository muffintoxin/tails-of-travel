const express = require('express');
const app = express();

// directory where files are hosted
app.use(express.static('./public'))

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.get('/visualization',function(req,res){
  res.sendFile('/visualization.html');
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});


