const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});

app.use(express.static('./public'))

