const express = require('express');
const app = express();
const net = require('net');


app.listen(5000, () => console.log('listening at 5000'))
app.use(express.json({ limit: '1mb' }))
app.use(express.static('public'));




// call this route to display the data which is currently stored in the global variable
app.post('/startsendSettings', function (req, res) {
    // just to show the connection prints the value here.
    // with the value you now can call your function here on server side.

    console.log(req.body.value)
    res.end();
});

function sendSettings(val) {
    var buf = new Buffer(1024);
    buf.writeInt32LE(val, 0);
    client.write(buf);
};



    //var server = net.createServer();
    // server.listen(PORT, HOST);
    //const socket = require("./controllers/socket")(server);
    //app.get("/socket/connection", socket.connection);

/*

var net = require('net');
let setval = 417;


var buf = new Buffer(1024);
buf.writeInt32LE(setval, 0); //max value to send 2147483647

let client = new net.Socket();
client.connect("8080", "10.16.1.30", () => {
console.log("Connected");
buf.writeInt32LE(setval);
client.write(buf, () => {})
});

*/



