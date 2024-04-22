import { colors, font, MuiSxStyles, ReactStyles } from 'src/components/theme/themeSettings'

export const styles: MuiSxStyles = {
  nameContainer: {
    display: 'flex',
    alignItems: 'center',

    color: colors.gray.medium,
    fontFamily: font.family,
    fontSize: font.size.ML,
    marginTop: 2,
    marginLeft: 2.5,
    marginRight: 2,
    marginBottom: 10,
  },
  nameFirst: {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: font.size.ML,
  },
  homeLink: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

export const reactStyles: ReactStyles = {
  homeLink: {
    textDecoration: 'none'
  }
}
