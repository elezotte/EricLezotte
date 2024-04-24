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

interface ButtonProps {
  hasWinner: boolean;
  isWinningSquare: boolean;
  onClick: () => void;
  value: User,
}

function Square({hasWinner, isWinningSquare, onClick, value}: ButtonProps): React.ReactNode {
  let squareStyles;

  if (hasWinner) {
    squareStyles = isWinningSquare ? styles.wonSquare : styles.gameOverSquare;
  } else {
    squareStyles = value ? styles.selectedSquare : styles.square;
  }

  return <button style={squareStyles} onClick={onClick}>{value}</button>
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
  }, [plays, positions, user, winner])

  const handleReset = useCallback(() => {
    setPositions(new Array(9).fill(null));
    setUser(winner ?? User.x);
    setWinner(undefined);
    setPlays(0);
  }, [winner]);

  useEffect(() => {
    checkForWin(positions);
  }, [checkForWin, positions]);

  return (
    <div style={styles.container}>
      <div style={styles.currentUser}>Current User: {user}</div>
      {winner && (<div style={styles.winner}>{winner} wins!</div>)}
      {!winner && plays === 9 && (<div style={styles.winner}>Draw. Nobody won :-(</div>)}
      <div style={styles.board}>
        <Square onClick={handleClick(0)} value={positions[0]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(0)} />
        <Square onClick={handleClick(1)} value={positions[1]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(1)} />
        <Square onClick={handleClick(2)} value={positions[2]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(2)} />
        <Square onClick={handleClick(3)} value={positions[3]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(3)} />
        <Square onClick={handleClick(4)} value={positions[4]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(4)} />
        <Square onClick={handleClick(5)} value={positions[5]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(5)} />
        <Square onClick={handleClick(6)} value={positions[6]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(6)} />
        <Square onClick={handleClick(7)} value={positions[7]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(7)} />
        <Square onClick={handleClick(8)} value={positions[8]} hasWinner={!!winner}  isWinningSquare={winningSquares.includes(8)} />
      </div>
      <button onClick={handleReset} style={styles.resetButton}>Reset Game</button>
    </div>
  );
}