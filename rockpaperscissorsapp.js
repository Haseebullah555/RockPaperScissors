let array = ["Rock","Paper","Scissor"];
function computerChoice(arr){
    //get random index number
    let randomIndex = Math.floor(Math.random() * arr.length);
    // get random value
    let value = arr[randomIndex];
    return value;
}
function userChoice(){
    let user = prompt("Please enter your choice!!!");
    return user;
}
 

function play(user, computer){
    if(user == computer){
        console.log("Draw");
    }
    else if(user == "Rock" && computer == "Paper"){
        console.log("Computer WIN!!!");
    }
    else if(user == "Paper" && computer == "Rock"){
        console.log("You WIN!!!");
    }
    else if(user == "Rock" && computer == "Scissor"){
        console.log("You WIN!!!");
    }
    else if(user == "Scissor" && computer == "Rock"){
        console.log("Computer WIN!!!");
    }
    else if(user == "Paper" && computer == "Scissor"){
        console.log("Computer WIN!!!");
    }
    else if(user == "Scissor" && computer == "Paper"){
        console.log("You WIN!!!");
    }
}
for(let i = 0; i < 5;i++){
    let computer = computerChoice(array);
    let user = userChoice();
    play(user, computer);
    // console.log("User Choice: " + user);
    // console.log("Computer choice: " + computer);
}
