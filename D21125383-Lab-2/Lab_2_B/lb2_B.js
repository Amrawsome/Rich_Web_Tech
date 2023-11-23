const notestainer = document.querySelector(".note");
const btnADD = document.querySelector(".add");

function updateDB() {
    localStorage.setItem("notes", notestainer.innerHTML);
}

btnADD.addEventListener("click", () => {
    let input = document.createElement("p");
    input.className = "n-input";
    input.setAttribute("contenteditable", "true");
    input.id = Math.random() * 1000000000000000000000000000000000000;

    let BTN = document.createElement("img");
    BTN.className = "delete";
    BTN.src = "icons8-bin-24.png";
    input.appendChild(BTN);

    let drbox = document.createElement("select");
    drbox.className = "colors";
    drbox.id = "colid";
    
    let option = document.createElement("option");
    option.id = "colid1";
    option.value = "red";
    option.text = "Red";
    drbox.appendChild(option);

    let option2 = document.createElement("option");
    option2.id = "colid2";
    option2.value = "green";
    option2.text = "Green";
    drbox.appendChild(option2);

    let option3 = document.createElement("option");
    option3.id = "colid3";
    option3.value = "blue";
    option3.text = "Blue";
    drbox.appendChild(option3);

    input.appendChild(drbox);
    notestainer.appendChild(input);
});

notestainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateDB();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".n-input");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateDB();
            };
        });
    }
});

notestainer.addEventListener("change", function (e) {
    if (e.target.className === "colors") {
        let id = e.target.parentNode.id;
        let check = e.target;
        let output = check.value;
        document.getElementById(id).style.backgroundColor = output;
        updateDB();
    }
});
