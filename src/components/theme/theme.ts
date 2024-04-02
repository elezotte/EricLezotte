'use client';
import { createTheme } from '@mui/material/styles';
import { colors, font } from './themeSettings';

// Add span as a valid variant to Typography component
declare module '@mui/material/styles' {
  interface TypographyVariants {
    span: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    span?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    span: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: colors.sky.regular,
      main: colors.sky.regular,
      dark: colors.sky.dark,
    },
    secondary: {
      light: colors.gray.light,
      main: colors.gray.medium,
      dark: colors.gray.dark,
    },
    action: {
      active: colors.sky.dark,
      hover: colors.gray.medium,
    },
    background: {
      default: colors.background,
    },
    text: {
      disabled: colors.gray.dark,
      primary: colors.gray.dark,
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 12%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

          '&.Mui-expanded:first-of-type': {
            marginTop: '32px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          color: colors.gray.mediumLight,
          '&:hover': {
            color: colors.gray.light,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: font.size.XL,
          fontWeight: font.weight.BOLD,
          color: colors.gray.mediumDark,
          marginBottom: '24px',

          span: {
            color: colors.sky.dark,
          }
        },
        h2: {
          fontSize: font.size.LG,
          fontWeight: font.weight.SEMIBOLD,
          color: colors.gray.mediumLight,
          marginBottom: '16px',
        },
        h3: {
          fontSize: font.size.ML,
          fontWeight: font.weight.SEMIBOLD,
          color: colors.gray.medium,
          marginBottom: '16px',
        },
        h4: {
          fontSize: font.size.MD,
          fontWeight: font.weight.SEMIBOLD,
          color: colors.gray.medium,
          marginBottom: '16px',
        },
        body1: {
          fontSize: font.size.MD,
          fontWeight: font.weight.REGULAR,
          color: colors.gray.dark,
        },
        button: {
          fontSize: font.size.SM,
          fontWeight: font.weight.SEMIBOLD,
        },
        caption: {
          fontSize: font.size.SM,
          fontWeight: font.weight.LIGHT,
          color: colors.gray.dark,
        },
        subtitle1: {
          fontSize: font.size.MD,
          fontWeight: font.weight.REGULAR,
          color: colors.gray.medium,
          marginLeft: 1,
        },
      },
    },
  },
  typography: {
    fontSize: font.size.MD,
    fontFamily: font.family,
    span: {
      fontSize: 'inherit',
      color: 'inherit',
    },
  },
})

export default theme
