import { getSkills } from 'lib/fauna'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getSkills()

  return res.json(data)
}
