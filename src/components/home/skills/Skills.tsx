import SkillsIcon from '@mui/icons-material/Star'
import { Chip, Divider, Grid, Tooltip, Typography } from '@mui/material'
import IconCircle from 'components/common/iconCircle/IconCircle'

import { getSkills } from 'lib/drizzle/drizzle.skills'
import { Skill } from 'lib/interfaces'
import { styles as homeStyles } from '../home.styles'
import { styles } from './skills.styles'

const renderSkill = (skill: Skill) => {
  const renderChip = () => (
    <Chip
      data-testid={`home-skill-chip-${skill.label}`}
      key={skill.yearsUsed ? skill.label : undefined}
      label={skill.label}
      sx={styles.skill}
    />
  )

  return skill.yearsUsed ? (
    <Tooltip
      data-testid="home-skill-tooltip"
      key={skill.label}
      title={`${skill.yearsUsed} years`}
    >
      {renderChip()}
    </Tooltip>
  ) : (
    renderChip()
  )
}

export default async function Skills() {
  const skills = await getSkills()

  return (
    <Grid
      container
      data-testid="home-skills"
      justifyContent="center"
      spacing={2}
      sx={homeStyles.section}
    >
      <Grid item xs={7}>
        <Typography
          variant="h3"
          sx={homeStyles.sectionTitle}
          data-testid="home-skills-title"
        >
          <IconCircle>
            <SkillsIcon sx={homeStyles.icon} />
          </IconCircle>
          Skills
        </Typography>
        <Divider sx={homeStyles.divider} />
        {skills.map((skill: Skill) => renderSkill(skill))}
      </Grid>
    </Grid>
  )
}
