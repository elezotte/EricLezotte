import { SxProps } from '@mui/material'
import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

const linkStyles: SxProps = {
  color: colors.sky.dark,
  display: 'flex',
  fontSize: font.size.MS,
  textTransform: 'uppercase',
}

export const styles: MuiSxStyles = {
  backLink: linkStyles,
  dividerTop: {
    marginBottom: 4,
  },
  dividerBottom: {
    marginTop: 4,
    marginBottom: 2,
  },
  linkIcon: {
    marginRight: 1,
    fontSize: 20,
  },
  section: {
    marginTop: 4,
    width: '100%',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 2,
    paddingTop: 0,
    position: 'relative',
  },
  sectionTitle: {
    fontSize: font.size.MD,
    fontWeight: font.weight.SEMIBOLD,
    lineHeight: 0,
    marginBottom: 2,
    marginTop: 2,

    '> span': {
      fontWeight: font.weight.REGULAR,
      marginRight: 1.5,
      textTransform: 'uppercase',
    },
  },
  sourceLink: {
    alignSelf: 'center',
    ...linkStyles,
  },
}
