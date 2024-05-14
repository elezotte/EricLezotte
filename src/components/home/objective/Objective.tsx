import ObjectiveIcon from '@mui/icons-material/OpenWith'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconCircle from 'components/common/iconCircle/IconCircle'

import { SiteText, SiteTexts } from 'lib/interfaces'
import { getSiteText } from 'lib/utils'
import { styles as homeStyles } from '../home.styles'

interface Props {
  siteText: SiteText[]
}

export default async function Objective({ siteText }: Props) {
  return (
    <Grid
      container
      data-testid="home-objective"
      justifyContent="center"
      spacing={2}
      sx={homeStyles.section}
    >
      <Grid item xs={7}>
        <Typography
          data-testid="home-objective-title"
          variant="h3"
          sx={homeStyles.sectionTitle}
        >
          <IconCircle>
            <ObjectiveIcon sx={homeStyles.icon} />
          </IconCircle>
          Objective
        </Typography>
        <Divider sx={homeStyles.divider} />
        <Typography data-testid="home-objective-text" variant="body1">
          {getSiteText(siteText, SiteTexts.OBJECTIVE)}
        </Typography>
      </Grid>
    </Grid>
  )
}
