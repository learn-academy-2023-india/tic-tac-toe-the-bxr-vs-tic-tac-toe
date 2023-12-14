import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
// import XPlayer from "./components/XPlayer"
// import OPlayer from "./components/OPlayer"

const App = () => {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('❌')



const winner = () => {
  if (Square[1] === Square[2]){
    return "win"
  }
  else {
    return "not win"
  }
//   let winningStatus = () => {

//   }
}

// const [winner, setWinner] = useState([
//   { player: ❌, winning: false },
//   { player: ⭕️, winning: false }
// ])


const handleClick = (id) => {
  if (board[id] === null) {
    const newBoard = [...board]
    newBoard[id] = currentPlayer
    setBoard(newBoard)
    setCurrentPlayer(currentPlayer === '❌' ? '⭕️' : '❌')
  }

}



const restartGame = () => {
  setBoard(Array(9).fill(null))
  setCurrentPlayer('❌')
}


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square board = {board}
      handleClick ={handleClick}/>
      {/* <XPlayer board = {board}/>
      <OPlayer board = {board}/> */}
      <h3> Player {winner} won!!</h3>
      <button onClick = {restartGame}>Restart Game</button>
     
    </>
  )
}

export default App