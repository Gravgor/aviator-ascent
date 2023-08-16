import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      if(!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          userAirline: "N/A",
          userRank: "N/A",
          userFlightHours: 0,
          userReputation: 0,
          userReputationRank: "N/A",
        },
      });

      return res.status(201).json({ message: 'User created', user: newUser, error: null  });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  },
  loginUser: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });
      if(!user) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if(!passwordMatch) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error logging in user:', error);
      return res.status(500).json(error);
    }
  },
    getUserById: async (req: Request, res: Response) => {
      try {
        const userEmail = req.params.email;
        const user = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
        });
        
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        
        return res.status(200).json(user);
      } catch (error) {
        console.error('Error getting user by ID:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    },
  };


export default userController;
