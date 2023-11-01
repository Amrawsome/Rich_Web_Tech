//input and error variables
const id_name =document.getElementById("id_Name");
const mobile_Num = document.getElementById("id_Mobile");
const email = document.getElementById("id_Email");
const errorM = document.getElementById("error");
const form = document.getElementById("form");


form.addEventListener('submit',(e) => {
  e.preventDefault();//stops page refresh on button hit
  let message = [];//array to hold messages
  let reg_Name = /[^a-zA-Z ]/;//regex for names
  let reg_Mobile = /[^0-9]/;//regex to ensure numbers
  let reg_Email =  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+.[a-z]{2,3}$/gm;//regex to ensure email is characters + @ + characters + . + 2-3 characters
  const email_Check = reg_Email.test(email.value);//testing if email follows regex
  // //Name Val
  //error checking to ensure the field is filled 
  if(id_name.value === '' || id_name.value == null){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Name is a  required field");
  }
  //checks that name field is less than 20 characters
  if(id_name.value.length >=20){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Names cannot be more than 20 characters");
  }
  //checks that name field is only letters
  if (reg_Name.test(id_name.value)){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Please enter letters only for Name")
  }
  //Mobile Val
  //makes sure mobile field isnt empty
  if(mobile_Num.value == null || mobile_Num.value==""){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Mobile Number is a  required field");
  }
  //ensures that mobile number is 10 digits long
  if( mobile_Num.value !== '' && mobile_Num.value.length != 10){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Mobile Number must be 10 digits long");
  }
  //ensures that mobile numbers is digits only
  if (reg_Mobile.test(mobile_Num.value)){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Please enter numbers only for Mobile ")
  }
  //Email Val
  //email field is not empty
  if(email.value === '' || email.value == null){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Email is a  required field");
  }
  //email can't be longer than 40 char
  if(email.value.length >40){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Email must be less than 40 characters");
  }
  //Ensures email regex is followed
  if (email.value !== '' && email_Check==false){
    document.getElementById("error").style.visibility = "visible"; 
    message.push("Please follow regular email format")    
  }
  //if there is error messages put them in the div and add and comma and space to join/seperate them
  if(message.length > 0){
    e.preventDefault();
    errorM.innerHTML = message.join(', ');
  }
  //if there is no errors keep div hidden
  if (message.length<1){
    document.getElementById("error").style.visibility = "hidden"; 
    //row addition
    let table = document.getElementById("tableBody");//setting table to table body to append later
    let row = document.createElement("tr")//creates html element table row
    //creates table data html element for the row        
    let data1 = document.createElement("td")
    let data2 = document.createElement("td")
    let data3 = document.createElement("td")
    //sets the td values to that of the field values
    data1.innerText = id_name.value
    data2.innerText = mobile_Num.value
    data3.innerText = email.value
    //appends each new value to the newly made td tags
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    //appends row to the table body
    table.appendChild(row)
    //sets fields to blank upon row addition
    id_name.value="";
    mobile_Num.value="";
    email.value=""; 
  }
})

function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("mytable");
  switching = true;
  
  dir = "asc";//set direction to ascending
  //start loop which will go until no switching has been done 
  while (switching) {
    switching = false;//no switching done
    rows = table.rows;
    //loop to go through table rows except header
    for (i = 1; i < (rows.length - 1); i++) {
      //no switching
      shouldSwitch = false;
      //get elements from current row and the one after
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //compare the rows and based on the order change place eg. if asc check that first element is closer to A
      //should it need to switch break the loop and switch 
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {      
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() <  y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    //if a switch is done perform the switch and mark it 
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //increase count 
      switchcount ++;
    } 
    else {
    //if no switching is done and direction is asc switch to desc
    if (switchcount == 0 && dir == "asc") {
      dir = "desc";
      switching = true;
    }
    }
  }
}

function Search(n) {
  var input, filter, table, tr, td, i, txtValue;
  let noresult = document.getElementById("noResult");
  input = document.getElementById("contactSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tbodi = document.getElementById("tableBody")
  tr = table.getElementsByTagName("tr");

  var counter = tr.length-1;
  //forr loop to go through rows and its data
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[n];
    //if there is data get the content or the text
    if (td) {
      txtValue = td.textContent || td.innerText;
      //filter through data using search input and set data to blank if it is not the searched data
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
        counter = counter-1
      } 
    } 
  }
    //if no rows are present after a search show no result
  if(counter == 0){ 
    noresult.style.display="block";
  }
  else{
    noresult.style.display = "none";
  }
}



