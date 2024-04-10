import { NextApiHandler } from 'next'
// import { PrismaClient } from '@prisma/client'
// import { rankings } from '../../../prisma/seeds/rankings.js'

// const prisma = new PrismaClient()

const handler: NextApiHandler = async (req, res) => {
  // try {
  //   await prisma.ranking.deleteMany()

  //   await Promise.all(
  //       rankings.map(async (ranking: any) => {
  //         await prisma.ranking.create({
  //           data: ranking,
  //         })
  //       })
  //     )
  //   res.status(200).json({ message: 'Test data seeded successfully' })
  // } catch (error) {
  //   console.error(error)
  //   res.status(500).json({ message: 'Error seeding test data' })
  // } finally {
  //   await prisma.$disconnect()
  // }
}

export default handler