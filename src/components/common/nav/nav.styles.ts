import { colors, font, MuiSxStyles } from 'src/components/theme/themeSettings'

export const styles: MuiSxStyles = {
  nameContainer: {
    display: 'flex',
    alignItems: 'center',

    color: colors.gray.dark,
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
    marginRight: 0.5,
    fontSize: font.size.ML,
  },
}
