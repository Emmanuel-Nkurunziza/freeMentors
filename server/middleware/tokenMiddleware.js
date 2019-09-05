import jwt from 'jsonwebtoken';
import { users } from '../modals/users';
import dotenv from 'dotenv';

dotenv.config();

export function checkToken(req, res, next) {
	const token = req.header('token');

	if (!token) return res.status(401).send({
		'status': 401,					//un authorized
		'message': 'Please signin in first.'
	});
	try {
		console.log(process.env.KEY)
		const verified = jwt.verify(token, process.env.secretOrPrivateKey); 

		const u = users.find(u => u.email == verified.email);

		req.user = {
			'token': verified,
			'email': verified.email,
			'role': u.role,
			'id': u.Id,
			'userFullName': `${u.first_name} ${u.last_name}`
		}; 
		next();
	} catch (error) {
		res.status(400).send({
			'status': 400,     //bad request
			'error': 'Invalid token!'
		});
	}
}