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
  iconKey: string
  label: string
  url: string
  rank?: string
}

export interface Skill {
  label: string
  rank?: string
  yearsUsed?: number
}

export interface SiteText {
  key: string
  value: string
}
