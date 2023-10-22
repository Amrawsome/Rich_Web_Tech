const UnameInput = document.getElementById("id_Name");
const submit = document.getElementById("git_Srch");
const Avatar = document.getElementById("avatar")
const Name = document.getElementById("user_Name");
const Uname = document.getElementById("user_Uname");
const Email = document.getElementById("user_Email");
const Loc = document.getElementById("user_Location");
const NOG = document.getElementById("user_Gists");
const repoList = document.getElementById("repo_list");
let count = 0;




submit.addEventListener('click', (e) => {
   
    e.preventDefault();//stops page refresh on button hit

   detailRetrevial();
   repositoryRetrevial();
    
        
})

async function detailRetrevial(){
    const userName = UnameInput.value;
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => {
        Avatar.src = data.avatar_url;
        Name.value = data.name;
        Uname.value = data.login || 'Not Available';
        Email.value = data.email || 'Not Available';
        Loc.value = data.location || 'Not Available';
        NOG.value = data.public_gists || 'Not Available';
    })
}

async function repositoryRetrevial(){
    const userName = UnameInput.value;
    const rName = "Name:"
    const rDesc = "Description:";
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            count++;
            const cell  = document.createElement('div');
            const cellRepN = document.createElement('p');
            const cellRepD = document.createElement('p'); 
            
            cellRepN.textContent = rName+" "+repo.name;
            cellRepD.textContent = rDesc+" "+repo.description || "Not Available";
            
            cell.appendChild(cellRepN);
            cell.appendChild(cellRepD);
            repoList.appendChild(cell);
            
        });
        if(count > 5){
            repoList.style.overflowY="auto";
        }
    })
}