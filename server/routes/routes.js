import { Router } from 'express';
import { signin, signup, updateMentor, mentors, getMentorId } from '../controllers/users';
import { validate } from '../middleware/validationMiddleware';
import { isEmailUsed, hashPass, authantic, isAdmin } from '../middleware/userMiddleware';
import { checkToken } from '../middleware/tokenMiddleware';

const router = Router();
//  api
router.post('/auth/signup', validate, isEmailUsed, hashPass, signup); 
router.post('/auth/signin', validate, authantic, signin);
router.patch('/user/:userId', checkToken, isAdmin, updateMentor);//Change user to a mentor
router.get('/mentors', checkToken, mentors);//Get all mentors
router.get('/mentors/:userId', checkToken,getMentorId);//Get a specific mentor


export default router;