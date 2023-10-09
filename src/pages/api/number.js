import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {

    if (req.method === 'GET') {
        const { projectID } = req.query;

        try {
        // Count the number of likes for a specific project
        const likeCount = await prisma.likes.count({
            where: {
            projectID: projectID,
            },
        });

        res.status(200).json({ likeCount });
        } catch (error) {
        console.error('Error counting likes:', error);
        res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).end(); // Method not allowed
    }
}