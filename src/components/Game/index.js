import React, {useState} from 'react';
import Board from '../Board';

import { calculateWinner } from '../Helpers';

import newGameButton from '../../assets/newGame.png'

import { Container } from './styles';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];

    //if user click an occupied square or if game is won, return 
    if (winner || boardCopy[i]) return;

    //Put an X or an O in the clicked square:
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  const renderMoves = () => {
    return (
      <button className="button-start" onClick={() => setBoard(Array(9).fill(null))}>
        <img src={newGameButton} alt="Start New Game"/>
      </button>
    )
  }

  return (
    <Container>
      <div className="instructions" >
        <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')} </p>
        {renderMoves()}
      </div>
      <Board squares={board} onClick={handleClick} />
    </Container>
  )
}

export default Game;