import { Box } from '@mui/material'
import React from 'react'
import { styles } from './iconCircle.styles'

export default function Nav({ children }: { children: React.ReactNode }) {
  return <Box sx={styles.iconCircle}>{children}</Box>
}
