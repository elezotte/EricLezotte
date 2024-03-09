import {
  Grid
} from '@mui/material'

import { getSiteTexts } from 'lib/drizzle/drizzle.siteText'
import Head from 'next/head'
import Actions from './actions/Actions'
import Description from './description/Description'
import { styles } from './home.styles'
import Location from './location/Location'
import ProfileImage from './profileImage/ProfileImage'
import Seeking from './seeking/Seeking'
import Skills from './skills/Skills'

export default async function Home() {
  const siteText = await getSiteTexts()

  return (
    <Grid justifyContent="center" container>
      <Head>
        <title>EricLezotte.com</title>
      </Head>
      <Grid container justifyContent="center" sx={styles.section}>
        <ProfileImage/>
        <Description siteText={siteText} />
      </Grid>
      <Actions />
      <Skills />
      <Seeking siteText={siteText} />
      <Location siteText={siteText} />
    </Grid>
  )
}
