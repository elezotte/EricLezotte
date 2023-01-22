import { SiteText, SiteTexts } from 'lib/interfaces'

export const sortByRank = (a: any, b: any) => (a?.rank || 99) - (b?.rank || 99)

export const getSiteText = (textData: SiteText[], key: SiteTexts) =>
  textData.find((siteText) => siteText.key === key)?.value
