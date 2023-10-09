import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
/*
  let userID1 = "";
  // alert(typeof window)
 // if (typeof window !== 'undefined') {
  //  userID1 = window.localStorage.getItem('userID');
  //} 
// Retrieve the 'userID' cookie

useEffect( () => {
  if (typeof window !== 'undefined') {
     userID1 = localStorage.getItem('userID');
  }
}, [count]);


  if (!userID1) {
     userID1 = Math.random().toString(36).substring(2, 10);
     useEffect(() => {
      if (typeof window !== 'undefined') {
         userID1 = localStorage.setItem('userID',userID1);
      }
    }, []);
   }

  if (req.method === 'POST') {
    const { projectID } = req.body;

    try {
      // Check if a user with the given userID exists in the database
      const existingUser = await prisma.likes.findFirst({
        where: {
          userID : userID1,
        },
      });

      const existingPro = await prisma.likes.findFirst({
        where: {
          projectID : projectID,
        },
      });

      if (!existingUser) {
        const like = await prisma.likes.create({
          data: {
            userID : userID1,
            projectID : projectID,
          },
        });
        res.status(201).json(like);
      }else{
        if(existingPro){
            console.log('déjà like')
        }else{
          let userID2 = null ;
          if (typeof window !== 'undefined' && window.localStorage) {
            // Use localStorage
            userID2 = localStorage.getItem('userID');
          }
            const like = await prisma.likes.create({
              data: {
                userID : userID2,
                projectID : projectID,
              },
            });
            res.status(201).json(like);
        }
      }
    } catch (error) {
      console.error('Error handling like:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
  */
const { userID,projectID } = req.body;

try {
  // Check if a user with the given userID exists in the database
  const existingUser = await prisma.likes.findFirst({
    where: {
      userID: userID,
    },
  });

  const existingPro = await prisma.likes.findFirst({
    where: {
      userID:userID,
      projectID: projectID,
    },
  });

  if (!existingUser) {
    if (req.method === 'POST') {
      const { userID,projectID } = req.body;
      const like = await prisma.likes.create({
        data: {
          userID : userID,
          projectID : projectID,
        },
      });
      res.status(201).json(like);
  }
  } else {
    if (existingPro) {
      console.log('Already liked');
    } else {
      if (req.method === 'POST') {
        const { userID,projectID } = req.body;
        const like = await prisma.likes.create({
          data: {
            userID : userID,
            projectID : projectID,
          },
        });
        res.status(201).json(like);
    }
    }
  }
} catch (error) {
  console.error('Error handling like:', error);
}
}





