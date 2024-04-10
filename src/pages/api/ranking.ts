import { NextApiHandler } from 'next'
// import { PrismaClient } from '@prisma/client'

const handler: NextApiHandler = async (req, res) => {
    // const prisma = new PrismaClient()

    // try {
    //     const { name, level, finishTime } = req.body;

    //     const result = await prisma.ranking.create({
    //         data: {
    //             name: name,
    //             level: level,
    //             finishTime: finishTime,
    //         }
    //     });
    //     res.json(result);
    //   } catch (error) {
    //     console.error(error)
    //     res.status(500).json({ message: error })
    //   }
}

export default handler