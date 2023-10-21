const UnameInput = document.getElementById("id_Name");
const submit = document.getElementById("git_Search");
const Avatar = document.getElementById("avatar")
const Name = document.getElementById("user_Name");
const Uname = document.getElementById("user_Uname");
const Email = document.getElementById("user_Email");
const Loc = document.getElementById("user_Location");
const NOG = document.getElementById("user_Gists");


submit.addEventListener('click', () => {
    const userName = UnameInput.value;

    fetch('https://api.github.com/users/${userName}')
        .then(response => response.json())
        .then(data => {
            Avatar.src = data.avatar_url;
        })
})

