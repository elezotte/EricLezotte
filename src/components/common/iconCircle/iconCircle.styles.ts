import { colors, font, MuiSxStyles } from 'src/components/theme/themeSettings'

export const styles: MuiSxStyles = {
  iconCircle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'text-bottom',

    backgroundColor: colors.sky.regular,
    borderRadius: 20,
    color: colors.background,
    fontSize: font.size.ML,
    fontWeight: font.weight.BOLD,
    marginRight: 1,
    height: 36,
    width: 36,
  },
}
