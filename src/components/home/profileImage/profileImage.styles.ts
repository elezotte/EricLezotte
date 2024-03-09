import { colors, font, MuiSxStyles } from 'src/components/theme/themeSettings'

export const imageSize = 280

export const styles: MuiSxStyles = {
  arrrText: {
    color: colors.gray.mediumDark,
    fontWeight: font.weight.BOLD,
    fontSize: font.size.SM,
  },
  imageContainer: {
    display: 'inline-block',
    position: 'relative',
    '& > img': {
      clipPath: 'circle(50%)',
    },
    '&::after': {
      content: '""',
      display: 'block',
      height: imageSize,
      width: imageSize,
      backgroundColor: 'transparent',
      top: 0,
      left: 0,
      position: 'absolute',
      border: `8px solid ${colors.gray.xlight}`,
      borderRadius: 300 / 2,
      boxSizing: 'border-box',
    },
    marginRight: 2,
  },
  imgSwitch: {
    position: 'absolute',
    bottom: 4,
    left: 108,
    zIndex: 100,
    background: colors.gray.xlight,
    borderRadius: 4,
    fontSize: font.size.SM,
    paddingRight: 1,
  },
}
