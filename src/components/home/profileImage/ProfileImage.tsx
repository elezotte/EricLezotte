'use client'

import { Box, FormControlLabel, Grid, Switch } from '@mui/material'
import { useState } from 'react'

import Image from 'next/image'
import { imageSize, styles } from './profileImage.styles'

export default function ProfileImage() {
  const [isArrr, setArrr] = useState(false)
  const imageUrl = `/images/headshot.full${isArrr ? '.arrr' : ''}.jpg`

  return (
    <Grid item sx={styles.imageContainer} xs={7} sm={7} md={7} lg="auto">
      <Image
        alt="me"
        data-testid="home-img"
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
        data-testid="home-img-switch"
        label={<Box sx={styles.arrrText}>Arrr!</Box>}
        sx={styles.imgSwitch}
      />
    </Grid>
  )
}
