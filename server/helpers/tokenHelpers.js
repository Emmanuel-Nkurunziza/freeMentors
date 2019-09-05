
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export function generateToken(email) {
	return jwt.sign({ email: email }, process.env.secretOrPrivateKey);
}
