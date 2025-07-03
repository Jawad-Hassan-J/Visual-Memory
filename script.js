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

let tureGuesses = []
let tureGuessesIndex =[]

let falseGuesses = []
let falseGuessesIndex =[]

let boxSize= 150
let boxClassLocaion 

const createBoxes = () =>{
    for(let i=0;i<(dimension*dimension);i++){

    let box = document.createElement("div")
    box.className = "box"
    box.id=i
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    containerClassLocation.appendChild(box)
    document.getElementById("container").style.gridTemplateColumns = `repeat(${dimension}, auto)`
    }
}

createBoxes()

document.getElementById("container").style.gridTemplateColumns = `repeat(${2}, auto)`