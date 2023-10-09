// pages/api/exist.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userID, projectID } = req.body;

    try {
      const existingPro = await prisma.likes.findFirst({
        where: {
          userID: userID,
          projectID: projectID,
        },
      });

      const likeExists = !!existingPro;

      res.status(200).json({ likeExists });
    } catch (error) {
      console.error('Error checking like existence:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
