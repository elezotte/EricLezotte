import LocationIcon from '@mui/icons-material/LocationCity'
import SeekingIcon from '@mui/icons-material/OpenWith'
import SkillsIcon from '@mui/icons-material/Star'
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  LinearProgress,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material'
import IconCircle from 'components/common/iconCircle/IconCircle'
import { fetcher } from 'lib/fauna'
import { Link, SiteTexts, Skill } from 'lib/interfaces'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { getSiteText, sortByRank } from 'src/utils'
import useSWR from 'swr'
import { imageSize, styles } from './home.styles'
import LinkItem from './linkItem/LinkItem'

const renderSkill = (skill: Skill) => {
  const renderChip = () => (
    <Chip
      data-testId={`home-skill-chip-${skill._id}`}
      key={skill.yearsUsed ? skill._id : undefined}
      label={skill.label}
      sx={styles.skill}
    />
  )

  return skill.yearsUsed ? (
    <Tooltip
      data-testId="home-skill-tooltip"
      key={skill._id}
      title={`${skill.yearsUsed} years`}
    >
      {renderChip()}
    </Tooltip>
  ) : (
    renderChip()
  )
}

export default function Home() {
  const [isArrr, setArrr] = useState(false)
  const { data: siteText, isLoading: siteTextLoading } = useSWR(
    '/api/siteText',
    fetcher
  )
  const { data: skills, isLoading: skillsLoading } = useSWR(
    '/api/skills',
    fetcher
  )
  const { data: links, isLoading: loadingLinks } = useSWR('/api/links', fetcher)
  !loadingLinks && links.sort(sortByRank)

  if (siteTextLoading || skillsLoading) {
    return <LinearProgress color="secondary" sx={styles.loader} />
  }

  skills.sort(sortByRank)

  const imageUrl = `/images/headshot.full${isArrr ? '.arrr' : ''}.jpg`

  return (
    <Grid justifyContent="center" container>
      <Head>
        <title>EricLezotte.com</title>
      </Head>
      <Grid container justifyContent="center" sx={styles.section}>
        <Grid item sx={styles.imageContainer} xs={7} sm={7} md={7} lg="auto">
          <Image
            alt="me"
            data-testId="home-img"
            src={imageUrl}
            height={imageSize}
            priority
            width={imageSize}
          />
          <FormControlLabel
            control={
              <Switch
                checked={isArrr}
                size="small"
                onChange={() => setArrr(!isArrr)}
              />
            }
            data-testId="home-img-switch"
            label={<Box sx={styles.arrrText}>Arrr!</Box>}
            sx={styles.imgSwitch}
          />
        </Grid>
        <Grid item xs={7} sm={7} md={7} lg={4}>
          <Typography
            data-testId="home-profession"
            variant="subtitle1"
            sx={styles.profession}
          >
            {getSiteText(siteText, SiteTexts.PROFESSION)}
          </Typography>
          <Typography data-testId="home-name" variant="h1" sx={styles.name}>
            Eric Lezotte
          </Typography>
          <Typography
            data-testId="home-statement"
            variant="body1"
            sx={styles.statement}
          >
            {getSiteText(siteText, SiteTexts.STATEMENT)}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        data-testId="home-links"
        justifyContent="center"
        sx={styles.section}
      >
        <Grid container justifyContent="center" sx={styles.section}>
          <Grid item xs={7} sm={7} md={7} lg="auto">
            <Box sx={styles.connections} data-testId="home-resume-download">
              <Button
                color="secondary"
                href="/Resume-EricLezotte.pdf"
                size="small"
                sx={styles.downloadButton}
                target="resume"
                variant="contained"
              >
                Download Resume
              </Button>
              <Button
                color="secondary"
                href="/code-samples"
                size="small"
                sx={styles.downloadButton}
                variant="outlined"
              >
                View Code Samples
              </Button>
              {!loadingLinks && (
                <Box sx={styles.externalLinks}>
                  {links.map((link: Link) => (
                    <LinkItem key={link._id} link={link} />
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        data-testId="home-skills"
        justifyContent="center"
        spacing={2}
        sx={styles.section}
      >
        <Grid item xs={7}>
          <Typography
            variant="h3"
            sx={styles.sectionTitle}
            data-testId="home-skills-title"
          >
            <IconCircle>
              <SkillsIcon sx={styles.icon} />
            </IconCircle>
            Skills
          </Typography>
          <Divider sx={styles.divider} />
          {skills.map((skill: Skill) => renderSkill(skill))}
        </Grid>
      </Grid>
      <Grid
        container
        data-testId="home-seeking"
        justifyContent="center"
        spacing={2}
        sx={styles.section}
      >
        <Grid item xs={7}>
          <Typography
            data-testId="home-seeking-title"
            variant="h3"
            sx={styles.sectionTitle}
          >
            <IconCircle>
              <SeekingIcon sx={styles.icon} />
            </IconCircle>
            Seeking
          </Typography>
          <Divider sx={styles.divider} />
          <Typography data-testId="home-seeking-text" variant="body1">
            {getSiteText(siteText, SiteTexts.SEEKING)}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        data-testId="home-resume-location"
        justifyContent="center"
        spacing={2}
        sx={styles.section}
      >
        <Grid item xs={7}>
          <Typography
            data-testId="home-location-title"
            variant="h3"
            sx={styles.sectionTitle}
          >
            <IconCircle>
              <LocationIcon sx={styles.icon} />
            </IconCircle>
            Location
          </Typography>
          <Divider sx={styles.divider} />
          <Typography data-testId="home-location-text" variant="body1">
            {getSiteText(siteText, SiteTexts.LOCATION)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
