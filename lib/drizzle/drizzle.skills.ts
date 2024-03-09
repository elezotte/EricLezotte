import { eq, InferSelectModel } from 'drizzle-orm'
import { numeric, pgTable, text, uniqueIndex } from 'drizzle-orm/pg-core'
import { db } from './drizzle'

export const SkillsTable = pgTable(
  'skills',
  {
    label: text('label').notNull(),
    rank: numeric('rank').notNull(),
    yearsused: numeric('yearsused'),
  },
  (skill) => ({
    uniqueIdx: uniqueIndex('unique_idx').on(skill.label),
  })
)

export type Skill = InferSelectModel<typeof SkillsTable>

export const deleteSkill = async (label: string) =>
  db.delete(SkillsTable).where(eq(SkillsTable.label, label))

export const getSkills = async () => {
  const selectResult = await db
    .select()
    .from(SkillsTable)
    .orderBy(SkillsTable.rank)

  return selectResult
}

export const insertSkill = async (skill: Skill) =>
  db.insert(SkillsTable).values(skill)
