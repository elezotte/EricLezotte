import Box from '@mui/material/Box'
import Link from 'next/link'
import React from 'react'
import { reactStyles, styles } from './nav.styles'

import IconCircle from 'src/components/common/iconCircle/IconCircle'

export default function Nav({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Link style={reactStyles.homeLink} href='/'>
        <Box sx={styles.nameContainer}>
            <IconCircle>E</IconCircle>
            <Box>
               <Box sx={styles.nameFirst}>Eric</Box> Lezotte
            </Box>
        </Box>
      </Link>
      {children}
    </>
  )
}
