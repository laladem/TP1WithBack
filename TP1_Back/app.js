const express = require('express')
const app = express()

var cors = require('cors')
var path = require('path');

app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/chats.json'));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
