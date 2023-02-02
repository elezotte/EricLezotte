import { Player } from './config'
import { styles } from './ticTacTow.styles'

interface SquareProps {
  disabled: boolean
  index: number
  onClick: (player: Player, index: number) => void
  player: Player
  winningSquares: number[]
  xClicks: number[]
  oClicks: number[]
}

const Square = ({
  disabled,
  index,
  onClick,
  player,
  winningSquares,
  xClicks,
  oClicks,
}: SquareProps) => {
  const handleSquareClick = () => {
    onClick(player, index)
  }
  const winningStyles = winningSquares.includes(index)
    ? styles.winningSquare
    : {}
  const disabledStyles = disabled ? styles.squareDisabled : {}

  const squareStyles = {
    ...styles.square,
    ...disabledStyles,
    ...winningStyles,
  }

  const handleClick = () => {
    if (disabled) {
      return
    }
    handleSquareClick()
  }

  let squarePlayer
  squarePlayer = xClicks.includes(index) ? 'X' : squarePlayer
  squarePlayer = oClicks.includes(index) ? 'O' : squarePlayer

  return (
    <div onClick={handleClick} style={squareStyles}>
      {squarePlayer}
    </div>
  )
}

export default Square
