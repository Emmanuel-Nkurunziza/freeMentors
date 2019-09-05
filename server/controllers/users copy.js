
import { generateToken } from '../helpers/tokenHelpers';  // accessing generated tokens from the jwt
import dotenv from 'dotenv';


dotenv.config();


//Users can sign up
export const signup = (req, res) => {
	const { email, firstname, lastname, password, address, bio, occupation, expertise} = req.body;
	const user = {
		id: users.length + 1,
		email, 
		firstname,
		lastname,
		password,
		address,
		bio,
		occupation,
		expertise};

	users.push(user);
	const token = generateToken(user.email, process.env.secretOrPrivateKey);
	console.log(res.body)
	return res.status(201).send({
		'status': 201,    //created
		'message': 'User created successfully',
		'data': {
			'id': user.id,
			'token': token,
			'message': 'User created successfully',
		}
	});
};

//Users'sign in
export const signin = (req, res) => {
	const token = generateToken(req.body.email);
	return res.status(200).send({
		'status': 200,  //ok
		'message': 'User is successfully logged in',
		'data': {
			'token': token,
		}
	});
};

//Admin can change a user to a mentor
export const updateMentor = (req, res) => {

	const index = users.findIndex(u => u.id == req.params.userId);

	if (index > -1) {
		users[index].role = 'Mentor';

		return res.status(200).send({
			status: 200,  //ok
			message: 'User account changed to mentor'
		});
	}

	return res.status(401).send({
		status:401,  //unauthorized
		error: 'Invalid user id'
	});
};

//Users view mentors
export const mentors = (req, res) => {

	const mentors = users.filter(u => u.role == 'Mentor');

	return res.status(200).send({
		'status': 200,
		'data': mentors
	});
};

//User can view a specific mentor
export const getMentorId = (req, res) => {
	const user = users.find(u => u.id  == req.params.userId);
	if (user) {
		return res.status(200).send({
			'status': 200, //ok
			'data': user
		});
	}
	return res.status(404).send({
		status: 404, //not found
		message: 'No record found'
	});
};
