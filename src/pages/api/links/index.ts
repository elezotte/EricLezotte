import { getLinks } from 'lib/fauna'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getLinks()

  return res.json(data)
}
