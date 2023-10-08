const notestainer = document.querySelector(".note");
const btnADD = document.querySelector(".add");
const drop = document.querySelector(".colors")
let notes = document.querySelectorAll(".n-input");


function updateDB(){
    localStorage.setItem("notes", notestainer.innerHTML);

}

btnADD.addEventListener("click", ()=>{
    let input = document.createElement("p");
    input.className="n-input";
    input.setAttribute("contenteditable", "true");
    input.id = Math.random() * 1000000000000000000000000000000000000;

    let BTN = document.createElement("img");
    BTN.className="delete";
    BTN.src="icons8-bin-24.png";
    notestainer.appendChild(input).appendChild(BTN);

    let drbox = document.createElement("select");
    drbox.className = "colors";
    drbox.id = "colid"
    
    notestainer.appendChild(input).appendChild(drbox);
    let option = document.createElement("option");
    option.value="red";
    option.text="Red";
    drbox.appendChild(option);

    let option2 = document.createElement("option");
    option2.value="green";
    option2.text="Green";
    drbox.appendChild(option2);

    let option3 = document.createElement("option");
    option3.value="blue";
    option3.text="Blue";
    drbox.appendChild(option3);
    
})

notestainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateDB()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".n-input");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateDB();
            }
        })
    }
})

    notestainer.addEventListener("click", function(e){
     let id = e.target.parentNode.id;
     let check = document.getElementById("colid");
     let output = (check.value);
     document.getElementById(id).style.backgroundColor = output;
    
})

