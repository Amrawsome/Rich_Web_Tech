const id_name =document.getElementById("id_Name");
const mobile_Num = document.getElementById("id_Mobile");
const email = document.getElementById("id_Email");
const errorM = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let message = [];
    let reg_Name = /[^a-zA-Z ]/;
    let reg_Mobile = /[^0-9]/;
    let reg_Email =  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+.[a-z]{2,3}$/gm;
    const email_Check = reg_Email.test(email.value);
    //Name Val
    if(id_name.value === '' || id_name.value == null){
        message.push("Name is a  required field");
    }

    if(id_name.value.length >=20){
        message.push("Names cannot be more than 20 characters");
    }

     if (reg_Name.test(id_name.value)){
        message.push("Please enter letters only")
    }
    //Mobile Val
    if(mobile_Num.value == null || mobile_Num.value==""){
        message.push("Mobile Number is a  required field");
    }

    if( mobile_Num.value !== '' && mobile_Num.value.length != 10){
        message.push("Mobile Number must be 10 digits long");
    }

     if (reg_Mobile.test(mobile_Num.value)){
        message.push("Please enter numbers only")
    }
    //Email Val
    if(email.value === '' || email.value == null){
        message.push("Email is a  required field");
    }

    if(email.value.length >40){
        message.push("Names must be less than 40 characters");
    }



     if (email.value !== '' && email_Check==false){
        message.push("Please follow regular email format")    
     }

    if(message.length > 0){
        e.preventDefault();
        errorM.innerHTML = message.join(', ');
    }

    if (message.length<1){
    //creating table
    let table = document.getElementById("tableBody");
   
      // Create row element
      let row = document.createElement("tr")
      
      // Create cells
      let c1 = document.createElement("td")
      let c2 = document.createElement("td")
      let c3 = document.createElement("td")
     
      
      // Insert data to cells
      c1.innerText = id_name.value
      c2.innerText = mobile_Num.value
      c3.innerText = email.value
      
      
      // Append cells to row
      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      
      
      // Append row to table body
      table.appendChild(row)
    }
})



