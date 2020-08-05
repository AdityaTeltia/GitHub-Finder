// Init GitHub
const gitHub = new GitHub;

//Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');


// Search Input event Listener
searchUser.addEventListener('keyup',(e)=> {
    //Get Input Text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        gitHub.getUser(userText)
        .then(data => {
           if(data.profile.message === 'Not Found'){
            //Show alert
            ui.showAlert('User not Found','alert alert-danger');
           }else{
            //Show Profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);

           }
        })
    }else{
        //Clear profile
        ui.clearProfile();
    }
})