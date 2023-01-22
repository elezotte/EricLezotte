import faunadb from 'faunadb'
import { NextApiResponse } from 'next'

const secret = process.env.FAUNADB_SECRET_KEY as string
const q = faunadb.query
const client = new faunadb.Client({ secret })

export const faunaDbQuery = async (
  res: NextApiResponse,
  collectionName: string
) => {
  try {
    const dbs: any = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection(collectionName))),
        q.Lambda((x) => q.Get(x))
      )
    )

    res.status(200).json(dbs.data)
  } catch (error) {
    res.status(500).json({ error })
  }
}
