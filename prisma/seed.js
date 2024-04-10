const { PrismaClient } = require('@prisma/client')
const { rankings } = require('./seeds/rankings.js')
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.ranking.deleteMany()
    console.log('Deleted records in ranking table')

    await Promise.all(
      rankings.map(async (ranking) => {
        await prisma.ranking.create({
          data: ranking,
        })
      })
    )
    console.log('Added ranking data')

  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()