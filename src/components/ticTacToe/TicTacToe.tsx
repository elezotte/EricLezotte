'use client'

import { useCallback, useEffect, useState } from 'react'
import {styles} from './ticTacToe.styles'

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

enum User {
  x = 'X',
  o = 'O'
}

export default function TicTacToe(): React.ReactNode {
  const [user, setUser] = useState<User>(User.x);
  const [winner, setWinner] = useState<User>();
  const [winningSquares, setWinningSquares] = useState<number[]>([]);
  const [positions, setPositions] = useState(new Array(9).fill(null));
  const [plays, setPlays] = useState(0);

  const checkForWin = useCallback((currentPositions: any) => {
    for(const combo of winningCombos) {
      const i1 = combo[0];
      const i2 = combo[1];
      const i3 = combo[2];

      if(currentPositions[i1] === currentPositions[i2] && currentPositions[i2] === currentPositions[i3]) {
        setWinner(currentPositions[i1]);
        setWinningSquares([i1, i2, i3])
        break;
      }
    }
  }, []);

  const handleClick = useCallback((index: number) => () => {
    if(positions[index] || winner) {
      return;
    }

    const newPositions = [...positions];
    newPositions[index] = user;

    setPositions(newPositions);
    setUser(user === User.x ? User.o : User.x);
    setPlays(plays + 1);
  }, [positions, user, winner])

  const handleReset = () => {
    setPositions(new Array(9).fill(null));
    setUser(winner ?? User.x);
    setWinner(undefined);
    setPlays(0);
  }

  useEffect(() => {
    checkForWin(positions);
  }, [checkForWin, positions]);

  return (
    <div style={styles.container}>
      <div style={styles.currentUser}>Current User: {user}</div>
      {winner && (<div style={styles.winner}>{winner} wins!</div>)}
      {!winner && plays === 9 && (<div style={styles.winner}>Draw. Nobody won :-(</div>)}
      <div style={styles.board}>
        {positions.map((value, index) => {
          let squareStyles;

          if (winner) {
            squareStyles = winningSquares.includes(index) ? styles.wonSquare : styles.gameOverSquare;
          } else {
            squareStyles = value ? styles.selectedSquare : styles.square;
          }

          return (
            <button key={`${value}-${index}`} style={squareStyles} onClick={handleClick(index)}>{value}</button>
          )
        })}
      </div>
      <button onClick={handleReset} style={styles.resetButton}>Reset Game</button>
    </div>
  );
}