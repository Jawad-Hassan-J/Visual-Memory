let containerClassLocation = document.getElementById("container")
let containerGrid = document.getElementById("container").style.gridTemplateColumns 

let statsLocatoin = document.getElementById("stats")
let currentLevelLocation = document.getElementById("currentLevel")
let levelLiveLocation = document.getElementById("levelLive") 
let totalLivesLocation  = document.getElementById("totalLives") 


let currentLevel = 1
let levelLive = 3
let totalLives = 3

let dimension = 3
let squerNumber = 3

let board = []
let effectedBoard = []

let tureGuesses = []
let tureGuessesIndex =[]

let falseGuesses = []
let falseGuessesIndex =[]

let boxSize= 150
let boxClassLocaion 



const initializeLevel= ()=>{

    createBoxes()
    initializeBorads()
} 

function handleClick (){
let boxId = this.id
console.log(boxId)

}

const createBoxes = () =>{
    for(let i=0;i<(dimension*dimension);i++){

    let box = document.createElement("div")
    box.className = "box"
    box.id=i
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`
    box.addEventListener('click',handleClick)

    containerClassLocation.appendChild(box)

    // grid layout
    document.getElementById("container").style.gridTemplateColumns = `repeat(${dimension}, auto)`
    }
}

const initializeBorads= ()=> {
    for(let i=0;i<(dimension*dimension);i++){
        board[i]=""
        effectedBoard[i]=""
    }

}






createBoxes()

