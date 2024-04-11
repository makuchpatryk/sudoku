import { NextApiHandler } from 'next'
// import { PrismaClient } from '@prisma/client'

import Sudoku from '@/utils/sudoku.class';
import { LEVELS } from '@/defaults';

const handler: NextApiHandler = async (req, res) => {
    // const prisma = new PrismaClient()
    try {
        const level: string = (req.query.level || LEVELS.EASY) as string;
        const sudoku = new Sudoku(level);
        const {
            board,
            hide,
        } = sudoku.generate()

        res.json({
            board,
            hide
        });

      } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error seeding test data' })
      }
}

export default handler