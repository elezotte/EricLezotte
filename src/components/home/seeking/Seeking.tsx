import SeekingIcon from '@mui/icons-material/OpenWith'
import { Divider, Grid, Typography } from '@mui/material'
import IconCircle from 'components/common/iconCircle/IconCircle'

import { SiteText, SiteTexts } from 'lib/interfaces'
import { getSiteText } from 'lib/utils'
import { styles as homeStyles } from '../home.styles'

interface Props {
  siteText: SiteText[]
}

export default async function Seeking({ siteText }: Props) {
  return (
    <Grid
      container
      data-testid="home-seeking"
      justifyContent="center"
      spacing={2}
      sx={homeStyles.section}
    >
      <Grid item xs={7}>
        <Typography
          data-testid="home-seeking-title"
          variant="h3"
          sx={homeStyles.sectionTitle}
        >
          <IconCircle>
            <SeekingIcon sx={homeStyles.icon} />
          </IconCircle>
          Seeking
        </Typography>
        <Divider sx={homeStyles.divider} />
        <Typography data-testid="home-seeking-text" variant="body1">
          {getSiteText(siteText, SiteTexts.SEEKING)}
        </Typography>
      </Grid>
    </Grid>
  )
}
