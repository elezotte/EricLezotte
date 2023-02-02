import { useEffect, useState } from 'react'
import { Player, winningPatterns } from './config'
import Square from './Square'
import { styles } from './ticTacTow.styles'

export default function App() {
  const [player, setPlayer] = useState<Player>(Player.X)
  const [xClicks, setXClicks] = useState<number[]>([])
  const [oClicks, setOClicks] = useState<number[]>([])
  const [winner, setWinner] = useState<Player>()
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [winningSquares, setWinningSquares] = useState<number[]>([])

  const handleClick = (player: Player, index: number) => {
    player === Player.X && setXClicks([...xClicks, index])
    player === Player.O && setOClicks([...oClicks, index])
    setPlayer(player === Player.X ? Player.O : Player.X)
  }

  const isSquareDisabled = (index: number) =>
    xClicks.includes(index) || oClicks.includes(index) || gameOver || !!winner

  const getSquareProps = (index: number) => ({
    disabled: isSquareDisabled(index),
    gameOver,
    index,
    onClick: handleClick,
    player,
    xClicks,
    oClicks,
    winningSquares,
  })

  const handleReset = () => {
    setXClicks([])
    setOClicks([])
    setPlayer(Player.X)
    setWinner(undefined)
    setWinningSquares([])
    setGameOver(false)
  }

  useEffect(() => {
    winningPatterns.forEach((pattern) => {
      if (pattern.every((position) => xClicks.includes(position))) {
        setWinner(Player.X)
        setWinningSquares(pattern)
      }
      if (pattern.every((position) => oClicks.includes(position))) {
        setWinner(Player.O)
        setWinningSquares(pattern)
      }
    })
    if (!!winner || oClicks.length + xClicks.length === 9) {
      setGameOver(true)
    }
  }, [
    xClicks,
    oClicks,
    setGameOver,
    setWinner,
    setWinningSquares,
    winner,
    winningSquares,
  ])

  return (
    <div style={styles.board}>
      <div>
        <div style={styles.row}>
          <Square {...getSquareProps(1)} />
          <Square {...getSquareProps(2)} />
          <Square {...getSquareProps(3)} />
        </div>
        <div style={styles.row}>
          <Square {...getSquareProps(4)} />
          <Square {...getSquareProps(5)} />
          <Square {...getSquareProps(6)} />
        </div>
        <div style={styles.row}>
          <Square {...getSquareProps(7)} />
          <Square {...getSquareProps(8)} />
          <Square {...getSquareProps(9)} />
        </div>
      </div>
      <div style={styles.gameInfo}>
        <div>
          {!gameOver && <>Current Player: {player}</>}
          {winner && <>The winner is {winner}!</>}
          {gameOver && !winner && <>Nobody wins :-(</>}
        </div>
        <button onClick={handleReset} style={styles.resetBtn}>
          Reset Game
        </button>
      </div>
    </div>
  )
}
