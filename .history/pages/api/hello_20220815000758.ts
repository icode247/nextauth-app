// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  author: string,
  description: string,
}

const books: Data[] = [{
  name: 'movie',
  author: "John Doe",
  description: "This is a movie",
}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(books)
}
