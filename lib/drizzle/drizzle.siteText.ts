import { eq, InferSelectModel } from 'drizzle-orm'
import { pgTable, text, uniqueIndex } from 'drizzle-orm/pg-core'
import { db } from './drizzle'

export const SiteTextTable = pgTable(
  'sitetext',
  {
    key: text('key').notNull(),
    value: text('value').notNull(),
  },
  (siteText) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(siteText.key),
    }
  }
)

export type SiteText = InferSelectModel<typeof SiteTextTable>

export const deleteSiteText = async (key: string) => {
  return db.delete(SiteTextTable).where(eq(SiteTextTable.key, key))
}

export const getSiteTexts = async () => {
  const selectResult = await db.select().from(SiteTextTable)
  return selectResult
}

export const insertSiteText = async (siteText: SiteText) => {
  return db.insert(SiteTextTable).values(siteText)
}
