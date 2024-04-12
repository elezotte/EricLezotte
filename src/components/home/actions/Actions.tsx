import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { getLinks } from 'lib/drizzle/drizzle.links'
import { Link } from 'lib/interfaces'
import { styles as homeStyles } from '../home.styles'
import LinkItem from '../linkItem/LinkItem'
import { styles } from './actions.styles'

export default async function Actions() {
  const links = await getLinks()

  return (
    <Grid
      container
      data-testid="home-links"
      justifyContent="center"
      sx={styles.section}
    >
      <Grid container justifyContent="center" sx={homeStyles.section}>
        <Grid item xs={7} sm={7} md={7} lg="auto">
          <Box sx={styles.connections} data-testid="home-resume-download">
            <Button
              color="secondary"
              href="/resume/Resume-EricLezotte.pdf"
              size="small"
              sx={styles.downloadButton}
              target="resume"
              variant="contained"
            >
              Get PDF Resume
            </Button>
            <Button
              color="secondary"
              href="/resume/Resume-EricLezotte.rtf"
              size="small"
              sx={styles.downloadButton}
              target="resume"
              variant="outlined"
            >
              Get Text Resume
            </Button>
            <Box sx={styles.externalLinks}>
              {links.map((link: Link) => (
                <LinkItem key={link.iconKey} link={link} />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
