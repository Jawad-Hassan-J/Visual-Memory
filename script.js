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
    generateEffectedBoardr()
} 

function handleClick (){
let boxId = this.id
console.log(boxId)

if(board[boxId] !="")
   console.log("is avaliavle")

if(board[boxId]=== "")
    {
        board[boxId]=(`${boxId}`)
    }
console.log(board)
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

      if(board[randomIndex]===""){
        effectedBoard[randomIndex] = `${randomIndex}`
        i++
      }
        }
    }

const compare = (boxId)=>{
    if(effectedBoard.includes(boxId)){
        tureGuesses.push(boxId)
    }

    else
    falseGuesses.push(boxId) 

console.log("ture"+ tureGuesses)
console.log("false"+falseGuesses)
}


const printBoard=()=>{

    
    console.log("borad"+" "+board)
    console.log("effectedBoard"+" "+effectedBoard)
    console.log("tureGuesses"+" "+tureGuesses)
    console.log("falseGuesses"+" "+falseGuesses)



}


initializeLevel()

console.log("effected board is")
console.log(effectedBoard)
