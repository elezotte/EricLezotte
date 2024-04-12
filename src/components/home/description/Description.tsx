import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { SiteText, SiteTexts } from 'lib/interfaces'
import { getSiteText } from 'lib/utils'
import { styles } from '../home.styles'

interface Props {
  siteText: SiteText[]
}

export default async function Home({ siteText }: Props) {
  return (
    <Grid item xs={7} sm={7} md={7} lg={4}>
      <Typography
        data-testid="home-profession"
        variant="subtitle1"
        sx={styles.profession}
      >
        {getSiteText(siteText, SiteTexts.PROFESSION)}
      </Typography>
      <Typography data-testid="home-name" variant="h1" sx={styles.name}>
        <span>E</span>ric Lezotte
      </Typography>
      <Typography
        data-testid="home-statement"
        variant="body1"
        sx={styles.statement}
      >
        {getSiteText(siteText, SiteTexts.STATEMENT)}
      </Typography>
    </Grid>
  )
}
