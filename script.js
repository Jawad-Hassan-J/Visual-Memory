let containerClassLocation = document.getElementById("container")
let containerGrid = document.getElementById("container").style.gridTemplateColumns
let boxClassLocation = document.querySelectorAll(".box")

let defaultDimension = 3
let dimension = defaultDimension

let defaultSquareNumber = 3
let squareNumber = defaultSquareNumber

let board = []
let effectedBoard = []

let effectedBoxColor = "red"
let defaultBoxColor = "black"
let falseBoxColor = "hotpink"

let lossLevelColor = "red"
let winLevelColor = "deeppink"

let showTime = 900
let changeLevelDelay = "1000"

const initializeLevel = () => {
  createBoxes()
  initializeBoards()
  generateEffectedBoard()
  setTimeout(showEffectedBoard, 175)
  setTimeout(hideEffectedBoard, showTime)

  if (dimension <= 7) {
    setTimeout(nextLevel, 2500)
  }
}

const createBoxes = () => {
  for (let i = 0; i < dimension * dimension; i++) {
    let box = document.createElement("div")
    box.className = "box"
    box.id = i
    box.style.backgroundColor = defaultBoxColor
    containerClassLocation.appendChild(box)
  }
  document.getElementById(
    "container"
  ).style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
}

const initializeBoards = () => {
  for (let i = 0; i < dimension * dimension; i++) {
    board[i] = ""
  }
}

const generateEffectedBoard = () => {
  for (let i = 0; i < squareNumber; ) {
    let randomIndex = Math.floor(Math.random() * (dimension * dimension))

    if (
      board[randomIndex] === "" &&
      !effectedBoard.includes(`${randomIndex}`)
    ) {
      effectedBoard.push(`${randomIndex}`)
      i++
    }
  }
}

const nextLevel = () => {
  removeBoxes()
  board = []
  effectedBoard = []
  trueGuesses = []
  falseGuesses = []
  dimension++
  setTimeout(initializeLevel, 75)
}

const removeBoxes = () => {
  for (let i = 0; i < board.length; i++) {
    let box = document.getElementById(`${i}`)
    box.remove()
  }
}

const showEffectedBoard = () => {
  effectedBoard.forEach((index) => {
    let box = document.getElementById(index)
    box.style.backgroundColor = effectedBoxColor
  })
}

const hideEffectedBoard = () => {
  effectedBoard.forEach((index) => {
    let box = document.getElementById(index)
    box.style.backgroundColor = defaultBoxColor
  })
}

const resetBoards = () => {
  board = []
  effectedBoard = []
}

initializeLevel()
