import express from 'express';
import { signin, signup, updateMentor, mentors, getMentorId } from '../controllers/users';
import { validate } from '../middleware/validationMiddleware';
import { isEmailUsed, hashPass, authantic, isAdmin } from '../middleware/userMiddleware';
import checkToken from '../middleware/tokenMiddleware';
import { session,accept,reject } from '../controllers/sessionController';

const router = express.Router();
//  api
router.post('/auth/signup', validate, isEmailUsed, hashPass, signup); 
router.post('/auth/signin', validate, authantic, signin);
router.patch('/user/:userId', checkToken, isAdmin, updateMentor);//Change user to a mentor
router.get('/mentors', checkToken, mentors);//Get all mentors
router.get('/mentors/:userId', checkToken,getMentorId);//Get a specific mentor
router.post('/sessions',checkToken, session);//Create a mentorship session request
router.patch('/sessions/:sessionId/accept',checkToken ,accept);//A mentor can accept a mentorship session request
router.patch('/sessions/:sessionId/reject',checkToken , reject);//A mentor can reject a mentorship session request


export default router;