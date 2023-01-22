import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  iconCircle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.sky.regular,
    borderRadius: 20,
    color: colors.background,
    fontSize: font.size.ML,
    fontWeight: font.weight.BOLD,
    marginRight: 1,
    height: 40,
    width: 40,
  },
}
