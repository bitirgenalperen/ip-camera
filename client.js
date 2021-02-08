    function sendSettings(val) {
        var buf = new Buffer(1024);
        buf.writeInt32LE(val, 0); 
        client.write(buf);
    }; 

    document.getElementById("btn1").addEventListener('click', function() {
        const data = {value: 11};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });
    document.getElementById("btn2").addEventListener('click', function() {
        const data = {value: 12};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });
    document.getElementById("btn3").addEventListener('click', function() {
        const data = {value: 13};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });
    document.getElementById("btn4").addEventListener('click', function() {
        const data = {value: 14};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });
    document.getElementById("btn5").addEventListener('click', function() {
        const data = {value: 21};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });
    document.getElementById("btn6").addEventListener('click', function() {
        const data = {value: 22};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });
    document.getElementById("btn7").addEventListener('click', function() {
        const data = {value: 23};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });
    document.getElementById("btn8").addEventListener('click', function() {
        const data = {value: 24};
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/startsendSettings', options); 
    });