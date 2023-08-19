import { Request, Response, NextFunction } from 'express';
import { PrismaClient, User } from '@prisma/client';
import passport from '../config/passport.config';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          userAirline: 'N/A',
          userRank: 'N/A',
          userFlightHours: 0,
          userReputation: 0,
          userReputationRank: 'N/A',
        },
      });

      return res.status(201).json({ message: 'User created', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  loginUser: async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: any, user: User, info: { message: any; }) => {
      try {
          if (!user) {
            return res.status(401).json({ message: info.message || 'Incorrect email or password' });
          }
          req.login(user, (err) => {
            if (err) {
              throw err;
            }
            return res.status(200).json(user);
          });
      } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
      }
    })(req, res, next);
  },

  getUserById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default userController;
