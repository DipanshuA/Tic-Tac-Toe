const gameInfo = document.querySelector(".game-info");
const ticTacToe = document.querySelector(".tic-tac-toe");
const newGamebtn = document.querySelector(".btn");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const boxes = document.querySelectorAll('.box')


let currentPlayer;
let gameGrid;
const winningPostions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initGame(){
    currentPlayer = "X"
    gameGrid = ["","","","","","","","","",];

    boxes.forEach(function (box, index) {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        boxes[index].classList.remove("win")

    })
    newGamebtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`
    
}
initGame();

boxes.forEach((box, index) =>{
    box.addEventListener('click', () =>{
        handleClick(index);
    })
})
function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].textContent =currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents ="none"
        swapTurn()
        checkGameOver()

    }
}
function swapTurn(){
    if (currentPlayer ==="X"){
        currentPlayer = "0";
    }else{
        currentPlayer = "X"
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`
}

function checkGameOver(){
    let answer =""
    winningPostions.forEach((position)=>{
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
        && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
    
    if(gameGrid[position[0]] === "X") 
            answer = "X"
        else
        answer = "0"
            boxes.forEach(function (box) {
                box.style.pointerEvents = "none";
            })

        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
        
}})
  if(answer !== ""){
    gameInfo.innerText = `Winner PLayer - ${answer}`
    newGamebtn.classList.add('active')
    return;
  }
  let fillCount =0
  gameGrid.forEach((box) =>{
    if (box != ""){
        fillCount++
    }
  })
  if(fillCount === 9){
    gameInfo.innerText = "Game Tied !"
    newGamebtn.classList.add('active')
  }
}

newGamebtn.addEventListener("click", initGame)
