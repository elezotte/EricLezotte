import { Box } from '@mui/material'
import React from 'react'
import { styles } from './nav.styles'

import IconCircle from 'src/components/common/iconCircle/IconCircle'

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box sx={styles.nameContainer}>
        <IconCircle>E</IconCircle>
        <Box>
          <Box sx={styles.nameFirst}>Eric</Box> Lezotte
        </Box>
      </Box>
      {children}
    </>
  )
}
