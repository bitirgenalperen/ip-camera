console.log(document.getElementById("btn1"))
console.log(document.getElementById("btn2"))
console.log(document.getElementById("btn3"))
console.log(document.getElementById("btn4"))
console.log(document.getElementById("btn5"))
console.log(document.getElementById("btn6"))

document.getElementById("btn1").addEventListener('click', myFunction)
document.getElementById("btn2").addEventListener('click', myFunction)
document.getElementById("btn3").addEventListener('click', myFunction)
document.getElementById("btn4").addEventListener('click', myFunction)
document.getElementById("btn5").addEventListener('click', myFunction)
document.getElementById("btn6").addEventListener('click', myFunction)
document.getElementById("btn7").addEventListener('click', myFunction)
document.getElementById("btn8").addEventListener('click', myFunction)

async function myFunction() {
    console.log("Hi");
    const data = { value: 12 };
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };
    await fetch('/startsendSettings', options);

}