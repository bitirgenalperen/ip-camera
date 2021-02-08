
    //Camera Authentication
    var ip_address = "192.168.1.111"
    //camera username and password
    var username = "admin";
    var password = "admin";

    //A channel of camera stream
    Stream = require('node-rtsp-stream');
    stream = new Stream({
        streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address +':554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
        wsPort: 9999    
    });


    var HOST = '10.16.1.30'
    var PORT = 8080;
   
    var server = net.createServer();
    server.listen(PORT, HOST);
    const socket = require("./controllers/socket")(server);
    app.get("/socket/connection", socket.connection);

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



