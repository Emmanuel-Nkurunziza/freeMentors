import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

const newUser = {
	'email': 'ewink.01@gmail.com',
	'firstname': 'Emmanuel',
	'lastname': 'Nkurunziza',
	'password': '12345',
	'address': 'Kigali',
	'bio': 'this is is my Bio',
	'occupation': 'teacher',
	'expertise': '5 years',
};


// user sign up
describe('User signup', () => {
	it('expect to be created successfully', (done) => {
		chai.request(server)
			.post('/api/v1/auth/signup')
			.send(newUser)
			.end((err, res) => {
				expect(res).to.have.status(201);
				// expect(res).to.be.an('object');
				// expect(res.body).to.have.property('data');
				done();
			});
	});
});


//  signin
const sign = {
	email: 'ewink.01@gmail.com',
	password: '12345',
};

describe('User Arleady signin', () => {
	it('User signed succesfuly', (done) => {
		chai.request(server)
			.post('/api/v1/auth/signin')
			.send(sign)
			.end((err, res) => {
				expect(res).to.have.status(200);
				//expect(res).to.be.an('object');
				//expect(res.body).to.have.property('data');
				done();
			});
	});
});
