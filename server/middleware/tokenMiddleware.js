import jwt from 'jsonwebtoken';
import { users } from '../modals/users';
import dotenv from 'dotenv';

dotenv.config();

const checkToken = (req, res, next) => {

	const token = req.headers.token;

	if (!token) {
		return res.status(401).send({
			'status': 401,					//un authorized
			'message': 'Please signin in first.'
		});
	}
	try {
		const verified = jwt.verify(token, process.env.secretOrPrivateKey); 
		const u = users.find(u => u.email == verified.email);

		req.user = {
			'token': verified,
			'email': verified.email,
			'role': u.role,
			'id': u.id,
			'userFullName': `${u.firstname} ${u.lastname}`
		}; 
		next();
	} catch (error) {
		return res.status(400).send({
			'status': 400,     //bad request
			'error': 'Invalid token!'
		});
	}
}
export default checkToken;