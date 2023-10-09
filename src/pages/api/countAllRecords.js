import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const count = await prisma.likes.count();
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error counting records:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
