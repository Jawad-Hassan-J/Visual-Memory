let containerClassLocation = document.getElementById("container")
let containerGrid = document.getElementById("container").style.gridTemplateColumns

let statsLocation = document.getElementById("stats")
let currentLevelLocation = document.getElementById("currentLevel")

let levelLiveLocation = document.getElementById("levelLive")

let totalLivesLocation = document.getElementById("totalLives")
let boxClassLocation = document.querySelectorAll(".box")

let gameOverLocation = document.querySelector(`.game-over`)

let currentLevel = 1

let defaultLevelLive = 5
let levelLive = defaultLevelLive

let defaultTotalLives = 3
let totalLives = defaultTotalLives

let defaultNextLevelSequence = 5
let nextLevelSequence = defaultNextLevelSequence - 1
let nextLevelCounter = 0

let highScoreLocation = document.getElementById(`highScore`)
let highScore = 1

let defaultDimension = 3
let dimension = defaultDimension

let defaultSquareNumber = 3
let squareNumber = defaultSquareNumber

let defaultSequenceNumber = 0
let sequenceNumber = defaultSequenceNumber

let board = []
let effectedBoard = []

let trueGuesses = []
let falseGuesses = []

let effectedBoxColor = "deeppink"
let defaultBoxColor = "black"
let falseBoxColor = "red"

let lossLevelColor = "red"
let winLevelColor = "deeppink"

let showTime = 900
let isRunning = true
let gameReady = false

let changeLevelDelay = "1000"

currentLevelLocation.innerText = `Level: ${1}`
levelLiveLocation.innerText = `Level Live: ${levelLive} out of ${defaultLevelLive}`
totalLivesLocation.innerText = `Total Live: ${totalLives} out of ${defaultTotalLives}`

const initializeLevel = () => {
  if (isRunning) {
    gameReady = false
    createBoxes()
    initializeBorads()
    generateEffectedBoard()
    setTimeout(showEffectedBoard, 175)
    setTimeout(hideEffectedBoard, showTime)
    setTimeout(() => {
      gameReady = true
    }, showTime + 100)
  }
}

function handleClick() {
  if (gameReady) {
    let boxId = this.id
    if (board[boxId] != "") return

    if (board[boxId] === "") board[boxId] = `${boxId}`

    compare(boxId)
  }
}

const createBoxes = () => {
  for (let i = 0; i < dimension * dimension; i++) {
    let box = document.createElement("div")
    box.className = "box"
    box.id = i
    box.addEventListener("click", handleClick)
    box.style.backgroundColor = defaultBoxColor
    containerClassLocation.appendChild(box)
  }

  document.getElementById(
    "container"
  ).style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
}

const initializeBorads = () => {
  for (let i = 0; i < dimension * dimension; i++) {
    board[i] = ""
  }
}

const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort())

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

const compare = (boxId) => {
  if (isRunning) {
    if (gameReady) {
    }

    let box = document.getElementById(boxId)

    if (effectedBoard.includes(boxId)) {
      trueGuesses.push(boxId)
      box.style.backgroundColor = effectedBoxColor
    } else {
      falseGuesses.push(boxId)
      box.style.backgroundColor = falseBoxColor
      levelLive--
      levelLiveLocation.innerText = `Level Live: ${levelLive} out of ${defaultLevelLive}`
    }

    if (levelLive === 0) {
      totalLives--
      totalLivesLocation.innerText = `Total Live: ${totalLives} out of ${defaultTotalLives}`

      changeAllBoxColor(lossLevelColor)
      setTimeout(resetLevel, `${changeLevelDelay}`)

      levelLive = defaultLevelLive
      levelLiveLocation.innerText = `Level Live: ${levelLive} out of ${defaultLevelLive}`
    }

    if (totalLives === 0) {
      isRunning = false
      gameOver(true)
    }

    if (isEqual(trueGuesses, effectedBoard)) {
      levelLiveLocation.innerText = `Level Live: ${levelLive} out of ${defaultLevelLive}`
      gameReady = false
      changeAllBoxColor(winLevelColor)
      setTimeout(() => {
        nextLevel()
        gameReady = false
      }, `${changeLevelDelay}`)
    }
  }
}

const nextLevel = () => {
  removeBoxes()

  board = []
  effectedBoard = []
  trueGuesses = []
  falseGuesses = []
  levelLive = defaultLevelLive
  sequenceNumber = defaultSequenceNumber

  if (nextLevelCounter === nextLevelSequence || currentLevel === 1) {
    dimension++
    nextLevelCounter = 0
  } else {
    nextLevelCounter++
  }

  if (highScore <= currentLevel) {
    highScore++
    highScoreLocation.innerText = `High Score: ${highScore}`
  }

  currentLevel++
  currentLevelLocation.innerText = `Level: ${currentLevel}`

  levelLiveLocation.innerText = `level Live: ${levelLive} out of ${defaultLevelLive}`

  squareNumber++

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

const resetLevel = () => {
  if (isRunning) {
    sequenceNumber = defaultSequenceNumber
    levelLive = defaultLevelLive
    removeBoxes()
    resetBoards()
    initializeLevel()
  }
}

const changeAllBoxColor = (color) => {
  for (let i = 0; i < dimension * dimension; i++) {
    let box = document.getElementById(`${i}`)
    box.style.backgroundColor = `${color}`
  }
}

const resetBoards = () => {
  board = []
  effectedBoard = []
  trueGuesses = []
  falseGuessesIndex = []
}

const restartGame = () => {
  gameOver(false)
  removeBoxes()
  resetBoards()

  currentLevel = 1

  levelLive = defaultLevelLive
  totalLives = defaultTotalLives

  dimension = defaultDimension
  squareNumber = defaultSquareNumber

  nextLevelSequence = defaultNextLevelSequence - 1
  nextLevelCounter = 0

  isRunning = true
  gameReady = false

  currentLevelLocation.innerText = `Level: ${1}`
  levelLiveLocation.innerText = `Level Live: ${levelLive} out of ${defaultLevelLive}`
  totalLivesLocation.innerText = `Total Live: ${totalLives} out of ${defaultTotalLives}`

  initializeLevel()
}

const gameOver = (option) => {
  if (option === true) {
    gameOverLocation.style.opacity = 1
    gameOverLocation.style.pointerEvents = "auto"
  }

  if (option === false) {
    gameOverLocation.style.opacity = 0
    gameOverLocation.style.pointerEvents = "none"
  }
}

initializeLevel()
