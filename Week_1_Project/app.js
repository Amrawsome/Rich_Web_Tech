const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','green','purple'];



button.addEventListener('click', changeB);
button.addEventListener('click', changeC_Alert);

function changeB(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex];
    alert(color[colorIndex]);
}

