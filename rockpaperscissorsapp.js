let array = ["rock","paper","scissor"];
function computerChoice(arr){
    //get random index number
    let randomIndex = Math.floor(Math.random() * arr.length);
    // get random value
    let value = arr[randomIndex];
    return value;
}
function userChoice(){
    let user = prompt("Please enter your choice!!!");
    return user.toLowerCase();
}
 

function play(user, computer){
    if(user == computer){
        console.log("Draw");
    }
    else if(user == "rock" && computer == "paper"){
        console.log("Computer WIN!!!");
    }
    else if(user == "paper" && computer == "rock"){
        console.log("You WIN!!!");
    }
    else if(user == "rock" && computer == "scissor"){
        console.log("You WIN!!!");
    }
    else if(user == "scissor" && computer == "rock"){
        console.log("Computer WIN!!!");
    }
    else if(user == "paper" && computer == "scissor"){
        console.log("Computer WIN!!!");
    }
    else if(user == "scissor" && computer == "paper"){
        console.log("You WIN!!!");
    }
}
for(let i = 0; i < 5;i++){
    let computer = computerChoice(array);
    let user = userChoice();
    play(user, computer);
    if(!array.includes(user)){
        alert("Please select a valid choice!");
        i -= 1;
    }
    // console.log("User Choice: " + user);
    // console.log("Computer choice: " + computer);
}
