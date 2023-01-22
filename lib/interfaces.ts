export enum LinkIconKeys {
  GH = 'gh',
  IG = 'ig',
  LI = 'li',
}

export enum SiteTexts {
  LOCATION = 'location',
  PROFESSION = 'profession',
  SEEKING = 'seeking',
  STATEMENT = 'statement',
}

export interface Link {
  _id: string
  iconKey: LinkIconKeys
  label: string
  url: string
  rank?: number
}

export interface Skill {
  _id: string
  label: string
  rank?: number
  yearsUsed?: number
}

export interface SiteText {
  _id: string
  key: SiteTexts
  value: string
}
