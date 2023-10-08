const notestainer = document.querySelector(".note");
const btnADD = document.querySelector(".add");
let notes = document.querySelectorAll(".n-input");

btnADD.addEventListener("click", ()=>{
    let input = document.createElement("p");
    input.className="n-input";
    input.setAttribute("contenteditable", "true");
    let BTN = document.createElement("img");
    BTN.className="delete"
    BTN.src="icons8-bin-24.png"
    notestainer.appendChild(input).appendChild(BTN);
})

