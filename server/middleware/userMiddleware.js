
import { users } from '../modals/users';
import bcrypt from 'bcrypt';

// this function check if email of user is exist arleady into the system
export const isEmailUsed = (req, res, next) => {
	const user = users.find(user => user.email == req.body.email);
	if (user) {
		return res.status(401).send({
			'status': 401,		// unauthorized
			'message': 'Email already exist',
			'data': user.email
		});
	}
	next();
};

// this function helps in hashing
export const hashPass = async (req, res, next) => {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);
	req.body.password = hashPassword;
	next();
};

export const authantic = async (req, res, next) => {
	const user = users.find(user => user.email == req.body.email);
	console.log(users);
	if (user) {
		const validPassword = await bcrypt.compare(req.body.password, user.password);
		console.log(validPassword);
		if (validPassword) {
			req.body.userId = user.userId;
		}
		else {
			return res.status(404).send({
				'status': 404,   //not found
				'message': 'Password is not match, please try again.'
			});
		}
		next();
	} else {
		return res.status(404).send({
			'status': 404,
			'message': 'Email is not match, please try again.'
		});
	}
};


/// if admin is in the system
export const isAdmin = (req, res, next) => {
	if (req.user.role == 'Admin') {
		next();
	} else {
		return res.status(403).send({
			'status': 403,       // access denied
			'error': 'You are not Admin.'
		});
	}
};
