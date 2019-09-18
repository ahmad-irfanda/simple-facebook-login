// Simple Logic to Facebook Login
// author : Ahmad Irfanda
// https://www.instagram.com/ahmad_irfanda_

var database = [
    {
        username: "irfanda", 
        password: "123456"
    }
];

// if the login has been successful
// Newsfeed will appear in the console (google chrome) in developer mode (Ctrl + Shift + i)
var newsFeed = [
    {
        username: "Christian",
        timeline: "i'm so excited today .."
    }, 
    {
        username: "Hedrich", 
        timeline: "Hey, Do you have recomendation about nice vacation . . ?"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass){
    if(user === database[0].username &&
        pass === database[0].password){
            console.log(newsFeed);
    }else{
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);