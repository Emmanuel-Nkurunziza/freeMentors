import { User, users } from '../modals/users';
import { generateToken } from '../helpers/tokenHelpers';
import { Session,sessions } from "../modals/session";
//Users can sign up-create an account
export const signup = (req, res) => {
	console.log('before user signup'. users);
	const user = new User(users.length + 1,req.body.email, req.body.first_name, req.body.last_name, req.body.password, req.body.address, req.body.bio, req.body.occupation, req.body.expertise);
	users.push(user);
	console.log('after user signup'. users);
	const token = generateToken(user.email);
	return res.status(201).send({
		'status': 201,
		'message': 'User created successfully',
		'data': {
			'id': user.id,
			'token': token,
			'message': 'User created successfully',
		}
	});
};

//Login a user
export const signin = (req, res) => {
	const token = generateToken(req.body.email);
	return res.status(200).send({
		'status': 200,
		'message': 'User is successfully logged in',
		'data': {
			'token': token,
		}
	});
};

//Change a user to a mentor.
export const updateMentor = (req, res) => {
	console.log('before user changed to mentor'. users);

	const index = users.findIndex(u => u.id == req.params.userId);

	console.log('after user changed to mentor'. users);

	if (index > -1) {
		users[index].role = 'Mentor';

		return res.status(200).send({
			status: 200,
			message: 'User account changed to mentor'
		});
	}

	return res.status(401).send({
		status:401,
		error: 'Invalid user id'
	});
};

//Get all mentors

export const mentors = (req, res) => {

	const mentors = users.filter(u => u.role == 'Mentor');

	return res.status(200).send({
		'status': 200,
		'data': mentors
	});
};

//Get a specific mentor by it's id
export const getMentorId = (req, res) => {
	const user = users.find(u => u.id  == req.params.userId);
	if (user) {
		return res.status(200).send({
			'status': 200,
			'data': user
		});
	}
	return res.status(404).send({
		status: 404,
		message: 'No record found'
	});
};


//Create a mentorship session request.

export const session = (req, res) => {
	console.log('before create session', sessions);
	const session = new Session(sessions.length + 1, req.body.mentorId, req.user.id, req.body.questions, req.user.email);
	sessions.push(session);
	console.log('after create session', sessions, 'one session', session);

	return res.status(200).send({
		'status': 200,
		'data': session
	});
};

//A mentor can accept a mentorship session request
export const accept = (req, res) => {
	console.log('before', sessions);

	const accep = sessions.findIndex(a => a.sessionId === parseInt(req.params.sessionId, 10));
	console.log(accep, req.params.sessionId);
	console.log('after', sessions, 'after accepted', accep);
	

	if (accep > - 1) {
		sessions[accep].status = 'Accept';

		return res.status(202).send({
			'status': 200,
			'data': sessions[accep]
		});
	}

	return res.status(404).send({
		'status': 404,
		'error': 'No session of this specific id'
	});

	
};
//A mentor can reject a mentorship session request.

export const reject = (req, res) => {
	
	const rejec = sessions.findIndex(a => a.sessionId === parseInt(req.params.sessionId));

	if (rejec > -1) {
		sessions[rejec].status = 'Reject';

		return res.status(200).send({
			'status': 200,
			'data': sessions[rejec]
		});
	}
	return res.status(404).send({
		'status': 404,
		'error': 'No session of this specific id'
	});
	
};






