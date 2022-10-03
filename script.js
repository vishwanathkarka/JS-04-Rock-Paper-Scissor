//selecting the element
let paper = document.getElementById('paper')
let rock = document.getElementById('rock')
let scissor = document.getElementById('scissor')
let userSelected = document.getElementById("user-selected")
let computerSelected = document.getElementById("comp-selected")
let user = document.getElementById("user")
let computer = document.getElementById("comp")
let winner = document.getElementById("winner")
let resetI = document.getElementById("Reset")
let compCounter = 0
let userCounter = 0
let userCount = document.getElementById("comp")
// event handler
paper.addEventListener('click',paperSelected)
rock.addEventListener('click',rockSelected)
scissor.addEventListener("click",scissorSelected)
resetI.addEventListener("click",resetFunc)
// Random  function
function random (userSel){
    let comp = Math.floor(Math.random()*3)
    let computerChoose =" "    
    if(comp == 0){
        computerChoose = "Rock"
    }
    else if(comp == 1){
        computerChoose = "Paper"
    }
    else{
        computerChoose = "Scissor"
    }
 
console.log(userSel ,computerChoose)
if((userSel == "Rock" && computerChoose  == "Rock" || userSel== "Paper" && computerChoose == "Paper"  || userSel=="Scissor" && computerChoose == "Scissor" )){
    winner.textContent = "-"
}
    else if((userSel == "Rock" && computerChoose  == "Scissor" || userSel== "Paper" && computerChoose == "Rock"  || userSel=="Scissor" && computerChoose == "Paper" )){
      userCounter =  userCounter + 1
      user.textContent = userCounter
    
    winner.textContent = "User"
    // computer.textContent = compCounter
console.log(userCounter)
    }
    else{
        compCounter = compCounter + 1;
        console.log(comp)
        computer.textContent = compCounter
            // userCounter = userCounter - 1
            winner.textContent = "Computer"
            // user.textContent = userCounter
    }
    // userCount.textContent = userCount
    computerSelected.textContent = computerChoose

}

function resetFunc (){
  compCounter = 0
 userCounter = 0
 computer.textContent = compCounter
 user.textContent = userCounter
}
function paperSelected (){
userSelected.textContent = "Paper"
random("Paper")
}

function rockSelected (){
    userSelected.textContent = "Rock"
    random("Rock")
}
function scissorSelected (){
    userSelected.textContent = "Scissor"
    random("Scissor")
}