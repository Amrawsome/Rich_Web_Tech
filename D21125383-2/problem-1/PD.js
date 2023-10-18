const id_name =document.getElementById("id_Name");
const mobile_Num = document.getElementById("id_Mobile");
const email = document.getElementById("id_Email");
const errorM = document.getElementById("error");
const form = document.getElementById("form");
let message = [];

form.addEventListener('submit',(e) => {
    e.preventDefault();
   
    let reg_Name = /[^a-zA-Z ]/;
    let reg_Mobile = /[^0-9]/;
    let reg_Email =  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+.[a-z]{2,3}$/gm;
    const email_Check = reg_Email.test(email.value);
    // //Name Val
    // if(id_name.value === '' || id_name.value == null){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Name is a  required field");

    // }

    // if(id_name.value.length >=20){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Names cannot be more than 20 characters");
    // }

    //  if (reg_Name.test(id_name.value)){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Please enter letters only")
    // }
    // //Mobile Val
    // if(mobile_Num.value == null || mobile_Num.value==""){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Mobile Number is a  required field");
    // }

    // if( mobile_Num.value !== '' && mobile_Num.value.length != 10){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Mobile Number must be 10 digits long");
    // }

    //  if (reg_Mobile.test(mobile_Num.value)){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Please enter numbers only")
    // }
    // //Email Val
    // if(email.value === '' || email.value == null){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Email is a  required field");
    // }

    // if(email.value.length >40){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Names must be less than 40 characters");
    // }



    //  if (email.value !== '' && email_Check==false){
    //     document.getElementById("error").style.visibility = "visible"; 
    //     message.push("Please follow regular email format")    
    //  }

    // if(message.length > 0){
    //     e.preventDefault();
    //     errorM.innerHTML = message.join(', ');
    // }

    // if (message.length<1){
    //     document.getElementById("error").style.visibility = "hidden"; 
        
    
    let table = document.getElementById("tableBody");
   
      
      let row = document.createElement("tr")
      
      
      let data1 = document.createElement("td")
      let data2 = document.createElement("td")
      let data3 = document.createElement("td")
     
      
      
      data1.innerText = id_name.value
      data2.innerText = mobile_Num.value
      data3.innerText = email.value
      
      
      
      row.appendChild(data1);
      row.appendChild(data2);
      row.appendChild(data3);
      
      
    
      table.appendChild(row)

      id_name.value="";
      mobile_Num.value="";
      email.value=""; 
    //}
})

function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("mytable");
    switching = true;
    
    dir = "asc";
    
    while (switching) {
      
      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
       
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
       
        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
           
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) <  Number(y.innerHTML)) {
            
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
    
        switchcount ++;
      } else {

        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function Search(n) {

    var input, filter, table, tr, td, i, txtValue;
    const noreuslt = document.getElementById(noResult);
    input = document.getElementById("contactSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable");
    tr = table.getElementsByTagName("tr");
  
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[n];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } 
        else if(txtValue.toUpperCase().indexOf(filter) === 0) {
          message.push("No Result")
          noreuslt.innerHTML = "hello";
          alert("working");
        else {
          tr[i].style.display = "none";
        }
      }
    }
  }



