import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
// import XPlayer from "./components/XPlayer"
// import OPlayer from "./components/OPlayer"

const App = () => {
  
  const calculateWinner = (board) => {
    // trying to have ❌ call to winningLines
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // calculating numbers & assigning letters to numbers
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('❌')
  
  const winner = calculateWinner(board)

const handleClick = (id) => {
  console.log(id)
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