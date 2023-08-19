import { User } from "@prisma/client";

type ApplicationUser = User


declare global {
    namespace Express {
       export interface Request {
        currentUser?: ApplicationUser;
       }
    }
}