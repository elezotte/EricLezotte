import BackIcon from '@mui/icons-material/ChevronLeft'
import SourceCodeIcon from '@mui/icons-material/Code'
import ExpandIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Link,
} from '@mui/material'
import { styles } from './codeSamples.styles'
import TicTacToe from './samples/ticTacToe/TicTacToe'

export default function CodeSamples() {
  return (
    <Grid justifyContent="center" container>
      <Grid container justifyContent="center">
        <Grid item xs={11} justifyContent="left">
          <Link href="/" sx={styles.backLink} underline="none">
            <BackIcon sx={styles.linkIcon} />
            Home
          </Link>
          <Accordion sx={styles.section} disableGutters={true}>
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Box sx={styles.sectionTitle}>
                <span>Sample 1:</span>
                Tic Tac Toe Game
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sectionContent}>
              <Divider sx={styles.dividerTop} />
              <TicTacToe />
              <Divider sx={styles.dividerBottom} />
              <Link
                href="https://github.com/elezotte/EricLezotte/tree/main/src/components/codeSamples/samples/ticTacToe"
                sx={styles.sourceLink}
                target="tic-tac-toe-game"
                underline="none"
              >
                <SourceCodeIcon sx={styles.linkIcon} />
                View Source
              </Link>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Grid>
  )
}
