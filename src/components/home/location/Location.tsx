import LocationIcon from '@mui/icons-material/LocationCity'
import { Divider, Grid, Typography } from '@mui/material'
import IconCircle from 'components/common/iconCircle/IconCircle'

import { SiteText, SiteTexts } from 'lib/interfaces'
import { getSiteText } from 'lib/utils'
import { styles } from '../home.styles'

interface Props {
  siteText: SiteText[]
}

export default function Location({ siteText }: Props) {
  return (
    <Grid
      container
      data-testid="home-resume-location"
      justifyContent="center"
      spacing={2}
      sx={styles.section}
    >
      <Grid item xs={7}>
        <Typography
          data-testid="home-location-title"
          variant="h3"
          sx={styles.sectionTitle}
        >
          <IconCircle>
            <LocationIcon sx={styles.icon} />
          </IconCircle>
          Location
        </Typography>
        <Divider sx={styles.divider} />
        <Typography data-testid="home-location-text" variant="body1">
          {getSiteText(siteText, SiteTexts.LOCATION)}
        </Typography>
      </Grid>
    </Grid>
  )
}
