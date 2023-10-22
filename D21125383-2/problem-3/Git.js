const UnameInput = document.getElementById("id_Name");
const submit = document.getElementById("git_Srch");
const Avatar = document.getElementById("avatar")
const Name = document.getElementById("user_Name");
const Uname = document.getElementById("user_Uname");
const Email = document.getElementById("user_Email");
const Loc = document.getElementById("user_Location");
const NOG = document.getElementById("user_Gists");


submit.addEventListener('click', (e) => {
    const userName = UnameInput.value;
    e.preventDefault();//stops page refresh on button hit

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
        console.log(userName);
        
})

