import { eq, InferSelectModel } from 'drizzle-orm'
import { numeric, pgTable, text, uniqueIndex } from 'drizzle-orm/pg-core'
import { db } from './drizzle'

export const LinksTable = pgTable(
  'links',
  {
    iconKey: text('iconkey').notNull(),
    label: text('label').notNull(),
    rank: numeric('rank').notNull(),
    url: text('url').notNull(),
  },
  (links) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(links.iconKey),
    }
  }
)

export type Link = InferSelectModel<typeof LinksTable>

export const deleteLink = async (iconKey: string) => {
  return db.delete(LinksTable).where(eq(LinksTable.iconKey, iconKey))
}

export const getLinks = async () => {
  const selectResult = await db.select().from(LinksTable)
  return selectResult
}

export const insertLink = async (link: Link) => {
  return db.insert(LinksTable).values(link)
}
