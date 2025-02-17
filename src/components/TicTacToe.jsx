import React, { useState, useRef } from 'react';
import Cross from '../assets/cross.png';
import Circle from '../assets/circle.png';
import './TicTacToe.css';
import Sqaure from './Cells';

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [win, setWin] = useState(false);
  const [nextTurn, setNextTurn] = useState(true);
  //True:Cross,False:Circle
  const [subtitle, setSubTitle] = useState('');

  const calculateWinner = () => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let [a, b, c] of winCombinations) {
      let customValue = [cells[a], cells[b], cells[c]];
      if (customValue.every((val) => val === customValue[0] && val !== null)) {
        return true;
      }
    }

    return false; // No winner found
  };

  const handleClick = (e, index) => {
    //Avoid Swapping Image
    if (cells[index] === true || cells[index] == false || win) return;

    console.log(win);

    cells[index] = nextTurn;
    const winner = calculateWinner();
    winner ? setWin(true) : setWin(false);

    const status = winner
      ? `Winner: ${nextTurn ? 'X' : 'O'}`
      : cells.filter((value) => value != null).length == 9 // Check for draw
      ? "It's a Draw!"
      : `Next Player: ${!nextTurn ? 'X' : 'O'}`;
    setNextTurn(!nextTurn);
    setSubTitle(status);
  };

  const handleReset = () => {
    setWin(false);
    setNextTurn(true);
    setSubTitle('');
    setCells(Array(9).fill(null));
  };

  return (
    <>
      <div className="gameContainer">
        <div className="gameTitleContainer">
          <h1 className="gameTitle">Tic Tac Toe</h1>
          <h3 className="gameSubTitle">{subtitle}</h3>
        </div>
        <div className="gameBoard">
          {cells.map((cell, index) => (
            <Sqaure
              key={index}
              index={index}
              handleClick={handleClick}
              value={cell}
            />
          ))}
        </div>

        <div className="gameResetContainer">
          <button className="resetBtn" onClick={handleReset}>
            Reset Game
          </button>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
