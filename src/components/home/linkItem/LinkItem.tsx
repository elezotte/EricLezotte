import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Link, Tooltip } from '@mui/material'
import { LinkIconKeys, Link as LinkInterface } from 'lib/interfaces'
import { styles } from './linkItem.styles'

interface Props {
  link: LinkInterface
}

const Icons: { [key: string]: any } = {
  [LinkIconKeys.GH]: <GitHubIcon sx={styles.icon} />,
  [LinkIconKeys.IG]: <InstagramIcon sx={styles.icon} />,
  [LinkIconKeys.LI]: <LinkedInIcon sx={styles.icon} />,
}

const LinkItem: React.FC<Props> = ({ link }: Props) => {
  return (
    <Box sx={styles.linkContainer} data-testid={`home-link-${link.iconKey}`}>
      <Tooltip title={link.label}>
        <Link
          sx={styles.link}
          href={link.url}
          target={link.iconKey}
          rel="noreferrer"
        >
          {Icons[link.iconKey]}
        </Link>
      </Tooltip>
    </Box>
  )
}

export default LinkItem
