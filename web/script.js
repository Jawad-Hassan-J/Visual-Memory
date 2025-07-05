let containerClassLocation = document.getElementById("container")
let containerGrid = document.getElementById("container").style.gridTemplateColumns 

let statsLocatoin = document.getElementById("stats")
let currentLevelLocation = document.getElementById("currentLevel")

let levelLiveLocation = document.getElementById("levelLive") 

let totalLivesLocation  = document.getElementById("totalLives") 
let boxClassLocaion = document.querySelectorAll(".box")



let currentLevel = 1

let defaultLevelLive = 5
let levelLive = defaultLevelLive

let defaultTotalLives = 3
let totalLives = defaultTotalLives 

let defaultnextLevelSequence = 5
let nextLevelSequence = (defaultnextLevelSequence - 1) 
let nextLevelCounter = 0

let dimension = 3
let squerNumber = 3

let board = []
let effectedBoard = []

let tureGuesses = []
let tureGuessesIndex =[]

let falseGuesses = []
let falseGuessesIndex =[]


let effectedBoxColor = "red"
let defaulBoxColor = "aqua"
let falseBoxColor = "black"

let showTime = 900
let isRunning = true

let lossLevelColor ="red"
let winLevelColor ="lightgreen"
let changeLevelDelay = '1000'

currentLevelLocation.innerText= `Level: ${1}`
levelLiveLocation.innerText = (`Total Live: ${levelLive} out of ${defaultLevelLive}`)
totalLivesLocation.innerText = (`Total Live: ${totalLives} out of ${defaultTotalLives}`)







const initializeLevel= ()=>{

    if(isRunning){
        createBoxes()
        initializeBorads()
        generateEffectedBoardr()
        setTimeout(showEffectedBoard,175)
        //time out bro code
        setTimeout(hideEffectedBoard, showTime)
    }
} 

function handleClick (){
let boxId = this.id


if(board[boxId] !="")
   

if(board[boxId]=== "")
    {
        board[boxId]=(`${boxId}`)
    }

compare(boxId)



}

const createBoxes = () =>{
    for(let i=0;i<(dimension*dimension);i++){

    let box = document.createElement("div")
    box.className = "box"
    box.id=i
    box.addEventListener('click',handleClick)
    box.style.backgroundColor= defaulBoxColor

    containerClassLocation.appendChild(box)

}
// grid layout 
document.getElementById("container").style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
}

const initializeBorads= ()=> {
    for(let i=0;i<(dimension*dimension);i++){
        board[i]=""
    
    }

}

// https://quickref.me/compare-two-arrays-regardless-of-order.html
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort())


 // https://stackoverflow.com/questions/9071573/is-there-a-simple-way-to-make-a-random-selection-from-an-array-in-javascript-or

const generateEffectedBoardr = ()=> {

    for(let i=0;i<squerNumber;){
    let randomIndex = Math.floor(Math.random() *(dimension*dimension))

      if(board[randomIndex]==="" && !effectedBoard.includes(`${randomIndex}`)){
        effectedBoard.push(`${randomIndex}`)
        i++
      }
        }
    }

const compare = (boxId)=>{

    if (isRunning){
        let box = document.getElementById(boxId)

        if(effectedBoard.includes(boxId)){
            tureGuesses.push(boxId)
            box.style.backgroundColor = effectedBoxColor
            
        }

        else {
            falseGuesses.push(boxId) 
            box.style.backgroundColor = falseBoxColor
            levelLive --
            levelLiveLocation.innerText = `level Live: ${levelLive} out of ${defaultLevelLive}` 
        
        }

        if(levelLive === 0){
            totalLives--
            totalLivesLocation.innerText = `Total Live: ${totalLives} out of ${defaultTotalLives}`
            
            
            changeAllBoxColor(lossLevelColor)
            setTimeout(resetLevel,`${changeLevelDelay}`)

            levelLive = defaultLevelLive
            levelLiveLocation.innerText = `Level Live: ${levelLive} out of ${defaultLevelLive}`
            
        }

        if(totalLives === 0){
            isRunning =false
        }


        if (isEqual(tureGuesses,effectedBoard)){
            levelLiveLocation.innerText = `Level Live: ${levelLive} out of ${defaultLevelLive}`

            changeAllBoxColor(winLevelColor)
            setTimeout(nextLevel,`${changeLevelDelay}`)
        }
    }

}

const nextLevel =()=> {

removeBoxes()
// resetBoards()
board = []
effectedBoard = []

tureGuesses = []
tureGuessesIndex =[]

falseGuesses = []
falseGuessesIndex =[]

levelLive = defaultLevelLive



if ( (nextLevelCounter === nextLevelSequence) || (currentLevel === 1)) {
    dimension++
    nextLevelCounter = 0 } 

else {
nextLevelCounter++
}

currentLevel++
currentLevelLocation.innerText =`Level: ${currentLevel}`

levelLiveLocation.innerText = (`level Live: ${levelLive} out of ${defaultLevelLive}` )

squerNumber++ 

setTimeout(initializeLevel,75) // dealy for fix fast changing 



}

const removeBoxes = ()=>{
    for(let i=0;i<board.length;i++){
        let box = document.getElementById(`${i}`)
            box.remove()
        


    }


}

const showEffectedBoard = () =>{

    effectedBoard.forEach(index => {
        
    let box = document.getElementById(index)
    box.style.backgroundColor = effectedBoxColor
  }
   )
}

const hideEffectedBoard = () => {

effectedBoard.forEach(index => {
        
    let box = document.getElementById(index)
    box.style.backgroundColor = defaulBoxColor})

}

const resetLevel = () =>{

      if(isRunning){
        levelLive = defaultLevelLive
        removeBoxes()
        resetBoards()
        initializeLevel()
     
        
    } }

    
const changeAllBoxColor = (color)=>{

    console.log("is work")
    
    for(let i=0;i<(dimension * dimension);i++){
        let box = document.getElementById(`${i}`)
        box.style.backgroundColor = `${color}`}

    




}

const resetBoards = () =>{

    board = []
    effectedBoard = []

    tureGuesses = []
    tureGuessesIndex =[]

    falseGuesses = []
    falseGuessesIndex =[]

}

















const printBoard=()=>{

    console.log("---------- Print ----------")

    console.log("borad")
    console.log(board)

    console.log("effectedBoard")
    console.log(effectedBoard)
    
    console.log("tureGuesses") 
    console.log(tureGuesses)

    console.log("falseGuesses")
    console.log(falseGuesses)

    console.log("---------- Print ----------")



}

function temp(){


}



initializeLevel()



