import { ReactStyles } from 'src/components/theme/themeSettings'

const commonSquareStyles = {
  alignItems: 'center',
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '2px',
    display: 'flex',
    fontSize: '168px',
    fontWeight: 700,
    height: '200px',
    justifyContent: 'center',
    width: '200px',
};

export const styles: ReactStyles = {
  board: {
    backgroundColor: '#ccc',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    height: '612px',
    width: '612px',
    margin: '0 0 10px 0',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  container: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    margin: '0 100px',
  },
  currentUser: {
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '1em',
    marginBottom: '10px',
  },
  resetButton: {
    backgroundColor: '#369',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '10px 20px',
    marginTop: '20px'
  },
  square: {
    ...commonSquareStyles,
    color: '#666',
    cursor: 'pointer',
  },
  selectedSquare: {
    ...commonSquareStyles,
    color: '#666',
    pointerEvents: 'none',
  },
  gameOverSquare: {
    ...commonSquareStyles,
    color: '#aaa',
    pointerEvents: 'none',
  },
  wonSquare: {
    ...commonSquareStyles,
    color: '#6a6',
    pointerEvents: 'none',
  },
  winner: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '10px',
  }
}