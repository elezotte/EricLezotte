import { GraphQLClient } from 'graphql-request'
import { linksQuery, siteTextQuery, skillsQuery } from './queries'

import { Link, SiteText, Skill } from './interfaces'

export const fetcher = async (...args: any[]) => {
  const res = await fetch(args[0])
  return await res.json()
}

const gqlLClient = new GraphQLClient(process.env.FAUNADB_GQL_URL as string, {
  headers: {
    authorization: `Bearer ${process.env.FAUNADB_SECRET_KEY_GQL}`,
  },
})

const gqlRequest = async (query: any, key: string) => {
  const {
    [key]: { data },
  } = await gqlLClient.request(query, { size: 999 })
  return data
}

export const getLinks = async (): Promise<Link[]> =>
  gqlRequest(linksQuery, 'links')

export const getSiteText = async (): Promise<SiteText[]> =>
  gqlRequest(siteTextQuery, 'siteText')

export const getSkills = async (): Promise<Skill[]> =>
  gqlRequest(skillsQuery, 'skills')
