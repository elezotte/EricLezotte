import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  icon: {
    verticalAlign: 'text-bottom',
    marginRight: 1,
  },
  linkContainer: {
    alignItems: 'center',
    color: colors.sky,
    display: 'inline-block',
    fontSize: font.size.MD,
    lineHeight: 1,
  },
  link: {
    textDecoration: 'none',
  },
}
