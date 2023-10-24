//variables for functions
const UnameInput = document.getElementById("id_Name");
const submit = document.getElementById("git_Srch");
const Avatar = document.getElementById("avatar")
const Name = document.getElementById("user_Name");
const Uname = document.getElementById("user_Uname");
const Email = document.getElementById("user_Email");
const Loc = document.getElementById("user_Location");
const NOG = document.getElementById("user_Gists");
const repoList = document.getElementById("repo_list");
const rName = "Name:"
const rDesc = "Description:";

//running functions upon button press retrieving and displaying information
submit.addEventListener('click', (e) => {
    e.preventDefault();//stops page refresh on button hit
    detailRetrevial();//gets and displays user details
    repositoryRetrevial();//gets and displays repo details
});


async function detailRetrevial(){ 
    //retrieves user details and displays 
        const data = await retrieveUserDetails();
        Avatar.src = data.avatar_url;
        Name.value = data.name || "Not Available";
        Uname.value = data.login || 'Not Available';
        Email.value = data.email || 'Not Available';
        Loc.value = data.location || 'Not Available';
        NOG.value = data.public_gists;
}

async function repositoryRetrevial(){
    repoList.innerHTML="";//resets the list on run
        let data = await retrieveRepoDetails();//retrieves repo details
        //map going through all repos and creating and appending a display for the data
        const repoElements  = data.map((repo) => { 
            //creates the elements for diplay
            const cell  = document.createElement('div');
            const cellRepN = document.createElement('p');
            const cellRepD = document.createElement('p'); 
            //adds data to display 
            cellRepN.textContent = rName+" "+repo.name;
            cellRepD.textContent = rDesc+" "+repo.description || "Not Available";
            //appends elements to properly format the display
            cell.appendChild(cellRepN);
            cell.appendChild(cellRepD);
            repoList.appendChild(cell);
            //gets the completed cell back
            return cell;
        });
        //checks if the number of repos is more than 5 to start a scroll list if not 
        if(data.length > 5){
            repoList.style.overflowY="auto";
        }
        else{
            repoList.style.overflowY = "unset"
        }
    
}

//retrievesuser details 
async function retrieveUserDetails(){
    const userName = UnameInput.value;//name in search bar
    const response = await  fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    return data;
  }
//retrieves repoDetails
async function retrieveRepoDetails(){
    const userName = UnameInput.value;//name in search bar
    const response = await  fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await response.json();
    return data;
} 



