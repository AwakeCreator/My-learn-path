function changeContent(id) {
    document.getElementById("p2").innerHTML = "Welcome to my website";
    document.getElementById("may?").style.display = "block";
    document.querySelector(".input1").style.display = "block";
    document.querySelector(".btn1").style.display = "block";
}

function sayHello() {
    let value = document.querySelector(".input1");
    document.getElementById("hello").innerHTML = "Hello " + value.value + " nice to meet you, i will show you what i learned so far:)";
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.display = "block";
    })
}



function changeColor() {
    document.querySelector(".div1").style.backgroundColor = "red";
    setInterval(colorBack, 4000);
}

function colorBack() {
    document.querySelector(".div1").style.backgroundColor = "#ddd";
}
//fai una tastiera di colori

function mouseOver() {
    document.querySelector(".div2").style.backgroundColor = "green";
}

function mouseOut() {
    document.querySelector(".div2").style.backgroundColor = "#abc";
}

function mouseDown() {
    document.querySelector(".div3").style.backgroundColor = "yellow";
}

function mouseUp() {
    document.querySelector(".div3").style.backgroundColor = "#acf";
}

// creaza un vrei sa fi milionar 