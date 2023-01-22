import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Nav from 'components/common/nav/Nav'
import theme from 'components/theme/theme'
import { NextComponentType, NextPageContext } from 'next'

export default function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType<
    NextPageContext,
    Record<string, unknown>,
    Record<string, unknown>
  >
  pageProps: any
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </ThemeProvider>
  )
}
