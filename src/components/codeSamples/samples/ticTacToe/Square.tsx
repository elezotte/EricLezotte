import { Player } from './config'
import { styles } from './ticTacTow.styles'

interface SquareProps {
  oClicks: number[]
  xClicks: number[]
  disabled: boolean
  index: number
  onClick: (player: Player, index: number) => void
  player: Player
  winningSquares: number[]
}

const Square = ({
  disabled,
  index,
  onClick,
  player,
  winningSquares,
  oClicks,
  xClicks,
}: SquareProps) => {
  let squarePlayer

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
    onClick(player, index)
  }

  if (xClicks.includes(index)) {
    squarePlayer = Player.X
  } else if (oClicks.includes(index)) {
    squarePlayer = Player.O
  }

  return (
    <div onClick={handleClick} style={squareStyles}>
      {squarePlayer}
    </div>
  )
}

export default Square
