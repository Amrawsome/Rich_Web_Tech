const id_name =document.getElementById("id_Name");
const mobile_Num = document.getElementById("id_Mobile");
const email = document.getElementById("id_Email");
const errorM = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener('submit',(e) => {
    let message = [];

     let reg = /[^a-zA-Z ]/;

     if(id_name.value === '' || id_name.value == null){
        message.push("Name is a  required field");
    }

    if(id_name.value.length >=20){
        message.push("Names cannot be more than 20 characters");
    }

     if (reg.test(id_name.value)){
        message.push("Please enter letters only")
        
    }
    
    if(message.length > 0){
        e.preventDefault();
        errorM.innerHTML = message.join(', ');
    }
})