
import { generateToken } from '../helpers/tokenHelpers';  // accessing generated tokens from the jwt
import dotenv from 'dotenv';
import {User,users} from "../modals/users";



dotenv.config();


//Users can sign up *** where to insert the user to get the token of the mentor
export const signup = (req, res) => {
	console.log('before user signin', users);
	
	const user = new User(users.length + 1, req.body.email, req.body.firstname, req.body.lastname, req.body.password,req.body.address,req.body.bio, req.body.occupation, req.body.expertise);
	users.push(user);
	console.log('after user signin', users);
	const token = generateToken(user.email);
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
		console.log('after user changed', users, 'index', index);

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
