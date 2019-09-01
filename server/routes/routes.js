import express from 'express';
import usersValidation from '../validations/users';
import UserClass from '../controllers/users';
const router = express.Router();
router.get('/api/v1/users',UserClass.getAllUsers);
router.post('/api/v1/users/signup',[usersValidation],UserClass.createUser);
router.post('/api/v1/users/signin', UserClass.signin);
export default router;
