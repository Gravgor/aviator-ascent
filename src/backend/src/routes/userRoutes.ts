import express from 'express';
import userController from '../controllers/user.controller';
//import { authenticateUser, ensureAuthenticated } from '../middleware/authentication';

const router = express.Router();

router.post('/auth/create-account', userController.createUser);
router.post('/auth/login', userController.loginUser);

router.get('/auth/user/:email', userController.getUserById);

router.get('/auth/logout', (req, res) => {
    return res.status(200).json({ message: 'Logged out' });
})

router.get('/auth/session/check', (req, res) => {
    if(req.isAuthenticated()){
        return res.status(200).json({ message: 'Authenticated' });
    } else {
        return res.status(401).json({ message: 'Not authenticated' });
    }
})



export default router;
