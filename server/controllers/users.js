import users from '../modals/users';
import jwt from 'jsonwebtoken';
class UsersClass {
    static getAllUsers(req, res) {
        return res.status(200).send({
            status: 200,
            message: "Users sucessfully retrieved",
            data: users
        })
    }
    static createUser(req, res) {
        const newUser = {
            id: parseInt(users.length + 1),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            bio: req.body.bio,
            occupation: req.body.accupation,
            expertize: req.body.expertize
        };
        const token=jwt.sign({id:newUser.id,email:newUser.email},"PrivateKey",{expiresIn:'24hrs'});
        const checkEmail=users.find(user=>user.email===req.body.email);
        if(checkEmail){
            return res.status(409).send({
                status:409,
                message:`User with email ${req.body.email} already exist`
            })
        }
        users.push(newUser);
        return res.status(201).send({
            message: 'user is successfully created',
            token:token,
            data: newUser
        })
    }
    static signin(req,res){
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        const findEmail = users.filter(checkmail=>checkmail.email===user.email);
        const findPassword = users.filter(checkpassword=>checkpassword.password===user.password);
        if((findEmail==false)){
            return res.status(400).send({
                status: 400,
                meassage: 'incorect email or password'
            })
        }
        if(findPassword==false){
            return res.status(400).send({
                status: 400,
                meassage: 'incorect email or password'
            })
        }
        return res.status(200).send({
            status:200,
            message:'User successfully logged in'
        })
    }
}
export default UsersClass;