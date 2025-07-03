let containerClassLocation = document.getElementById("container")
let containerGrid = document.getElementById("container").style.gridTemplateColumns 

let statsLocatoin = document.getElementById("stats")
let currentLevelLocation = document.getElementById("currentLevel")
let levelLiveLocation = document.getElementById("levelLive") 
let totalLivesLocation  = document.getElementById("totalLives") 
let boxClassLocaion = document.querySelectorAll(".box")



let currentLevel = 1

let defaultLevelLive = 3
let levelLive = defaultLevelLive

let defaultTotalLives = 3
let totalLives = defaultTotalLives 

let defaultnextLevelSequence = 4
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

let boxSize= 150
let effectedBoxColor = "red"
let defaulBoxColor = "aqua"




const initializeLevel= ()=>{

    createBoxes()
    initializeBorads()
    generateEffectedBoardr()
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
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`
    box.addEventListener('click',handleClick)
    box.style.backgroundColor= defaulBoxColor

    containerClassLocation.appendChild(box)

}
// grid layout
document.getElementById("container").style.gridTemplateColumns = `repeat(${dimension}, auto)`
}

const initializeBorads= ()=> {
    for(let i=0;i<(dimension*dimension);i++){
        board[i]=""
    
    }

}

const exist = (arr,value ) => {
    let found = false
    for (let i=0;i<arr.length;i++){
        if(arr[i] === value ){
            found = true
            return found
        }
    }
    return found
}

// https://quickref.me/compare-two-arrays-regardless-of-order.html
const isEqual = (a, b) =>
    JSON.stringify(a.sort()) === JSON.stringify(b.sort())


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

    if(effectedBoard.includes(boxId)){
        tureGuesses.push(boxId)
    }

    else {falseGuesses.push(boxId) }




}


const nextLevel =()=> {

removeBoxes()

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
squerNumber++
initializeLevel()



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

    console.log(currentLevel)
    console.log(currentLevel % defaultnextLevelSequence === 0 || currentLevel ==1)

}
initializeLevel()


