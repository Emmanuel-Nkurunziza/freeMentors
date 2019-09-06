export class User {
	constructor(userId,email, firstname, lastname, password, address, bio, occupation, expertise, role = 'user'){
		this.id =userId;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.address = address;
		this.bio = bio;
		this.occupation = occupation;
		this.expertise = expertise;
		this.role = role;
	}
}

export let users = [
	new User(1,'nkurunziza@gmail.com', 'emmanuel', 'nkurunziza', '$2b$10$0itdkn7kwEa6e.58/V38g.3rz4SnxVsmaxw5GGHvxv2YICYftwcL6', 'Kigali', 'egggg', 'dddd', 'ddddd', 'Admin'),
];

 //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5rdXJ1bnppemFAZ21haWwuY29tIiwiaWF0IjoxNTY3Nzc2MTc2fQ.PBVfyl7afwXI5havDjcWuD9pVIrh9tSKzpsbEjB8bSo

