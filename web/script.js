let containerClassLocation = document.getElementById("container")
let containerGrid = document.getElementById("container").style.gridTemplateColumns 
let boxClassLocaion = document.querySelectorAll(".box")



let defaultDimension = 3
let dimension = defaultDimension

let DefaultSquerNumber = 3
let squerNumber = DefaultSquerNumber

let board = []
let effectedBoard = []

let effectedBoxColor = "red"
let defaulBoxColor = "aqua"
let falseBoxColor = "black"

let lossLevelColor ="red"
let winLevelColor ="lightgreen"

let showTime = 900
let changeLevelDelay = '1000'









const initializeLevel= ()=>{

        createBoxes()
        initializeBorads()
        generateEffectedBoardr()
        setTimeout(showEffectedBoard,175)
        setTimeout(hideEffectedBoard, showTime)

        if(dimension<= 7){
        setTimeout(nextLevel, 2500)}
}




const createBoxes = () =>{
    for(let i=0;i<(dimension*dimension);i++){

    let box = document.createElement("div")
    box.className = "box"
    box.id=i
    box.style.backgroundColor= defaulBoxColor
    containerClassLocation.appendChild(box)

}
document.getElementById("container").style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
}


const initializeBorads= ()=> {
    for(let i=0;i<(dimension*dimension);i++){
        board[i]=""
    
    }

}


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


const nextLevel =()=> {

removeBoxes()
board = []
effectedBoard = []

tureGuesses = []
tureGuessesIndex =[]

falseGuesses = []
falseGuessesIndex =[]

dimension++
setTimeout(initializeLevel,75)

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



const resetBoards = () =>{

    board = []
    effectedBoard = []

}


initializeLevel()



