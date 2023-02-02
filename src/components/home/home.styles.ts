import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

export const imageSize = 280

export const styles: MuiSxStyles = {
  arrrText: {
    color: colors.gray.mediumDark,
    fontWeight: font.weight.BOLD,
    fontSize: font.size.SM,
  },
  connections: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: -4,
  },
  divider: {
    marginBottom: 2,
  },
  downloadButton: {
    whiteSpace: 'nowrap',
    marginTop: 2,
    marginRight: 3,
  },
  externalLinks: {
    display: 'inline-block',
    marginTop: 2,
    marginLeft: 1,
  },
  icon: {
    fontSize: 24,
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
  loader: {
    marginLeft: 3,
    marginRight: 3,
    marginTop: -6,
    height: 4,
  },
  name: {
    lineHeight: 1,
    marginBottom: 0,
    marginTop: 1,
  },
  pageContainer: {
    display: 'flex',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: 24,
    fontWeight: 100,
    letterSpacing: 1,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  profession: {
    marginLeft: 0.5,
    lineHeight: 1,
    marginTop: 4,
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    marginBottom: 2,
  },
  skill: {
    color: colors.gray.medium,
    marginLeft: 1,
    marginBottom: 1,
    fontSize: font.size.SM,
  },
  statement: {
    marginLeft: 0.5,
    marginTop: 1,
  },
}
