import express from 'express';
import userController from '../controllers/userController';
import { authenticateUser, ensureAuthenticated } from '../middleware/authentication';

const router = express.Router();

router.post('/auth/create-account', userController.createUser);
router.post('/auth/login', authenticateUser, userController.loginUser);

router.get('/auth/user/:email', ensureAuthenticated, userController.getUserById);

router.get('/auth/logout', ensureAuthenticated, (req, res) => {
    return res.status(200).json({ message: 'Logged out' });
})


export default router;
