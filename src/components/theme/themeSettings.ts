import { SxProps } from '@mui/material'

export interface MuiSxStyles {
  [key: string]: SxProps
}

export const colors = {
  background: '#ffffff',
  sky: {
    regular: '#76d9e8',
    dark: '#02CAE8',
  },
  gray: {
    xlight: '#ebe8e0',
    light: '#ccc6b3',
    mediumLight: '#ada385',
    medium: '#8a7e5c',
    mediumDark: '#5c543d',
    dark: '#2e2a1f',
  },
}

export const font = {
  family: '"Montserrat", sans-serif',
  size: {
    SM: 12,
    MS: 14,
    MD: 18,
    ML: 24,
    LG: 30,
    XL: 48,
  },
  weight: {
    LIGHT: 100,
    REGULAR: 300,
    SEMIBOLD: 500,
    BOLD: 700,
  },
}
