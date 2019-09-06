export class Session {
	constructor(sessionId,mentorId, menteeId, questions, menteeEmail, status = 'pending') {
		this.sessionId = sessionId;
		this.mentorId = mentorId;
		this.menteeId = menteeId;
		this.questions = questions;
		this.menteeEmail = menteeEmail;
		this.status = status;
	}
}

export let sessions = [
	new Session(0, 0, 0, 'dummy data', 'dumy@gmail.com', 'pending')
];

