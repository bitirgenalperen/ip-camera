
    //Camera Authentication
    var ip_address = "192.168.1.121" //ip adress of the camera
    //camera username and password
    var username = "admin";
    var password = "ulkemhdr1234";

    //A channel of camera stream
    Stream = require('node-rtsp-stream');
    stream = new Stream({
        streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address +':554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
        wsPort: 9999    
    });

    var net = require('net');
    let setval = 417; //just some number

    var ip_listen = "10.16.1.30"; //ip of the port listening
    var port_listen = "8080";
    var buf = new Buffer(1024);
    buf.writeInt32LE(setval, 0); //max value to send 2147483647

    let client = new net.Socket();
    client.connect(port_listen, ip_listen , () => {
        console.log("Connected");
        buf.writeInt32LE(setval);
        client.write(buf, () => {})
    });
