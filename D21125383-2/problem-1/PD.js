const id_name =document.getElementById("id_Name");
const mobile_Num = document.getElementById("id_Mobile");
const email = document.getElementById("id_Email");
const errorM = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener('submit',(e) => {
    let message = [];
    let reg_Name = /[^a-zA-Z ]/;
    let reg_Mobile = /[^0-9]/;
    //Name Val
    // if(id_name.value === '' || id_name.value == null){
    //     message.push("Name is a  required field");
    // }

    // if(id_name.value.length >=20){
    //     message.push("Names cannot be more than 20 characters");
    // }

    //  if (reg_Name.test(id_name.value)){
    //     message.push("Please enter letters only")
    // }
    //Mobile Val
    if(mobile_Num.value == null){
        message.push("Mobile Number is a  required field");
    }

    if(mobile_Num.value.length != 10){
        message.push("Mobile Number must be 10 digits long");
    }

     if (reg_Mobile.test(mobile_Num.value)){
        message.push("Please enter numbers only")
    }
    //Email Val
    



    if(message.length > 0){
        e.preventDefault();
        errorM.innerHTML = message.join(', ');
    }
})