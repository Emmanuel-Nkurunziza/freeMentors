import validator from 'validator';
const usersValidation = (req,res, next) => {
    if(validator.isEmpty(req.body.firstName)){
        return res.status(400).send({
            message: 'firstName is required'
        })
    }
    if(validator.isEmpty(req.body.lastName)){
        return res.status(400).send({
            message: 'lastName is required'
        })
    }
    if((!validator.isEmail(req.body.email))){
        return res.status(400).send({
            message: 'wrong email format'
        })
    }
    if(validator.isEmpty(req.body.password)){
        return res.status(400).send({
            message: 'password is required'
        })
    }
    if(validator.isEmpty(req.body.address)){
        return res.status(400).send({
            message: 'address is required'
        })
    }
    if(validator.isEmpty(req.body.bio)){
        return res.status(400).send({
            message: 'Biography is required'
        })
    }
    if(validator.isEmpty(req.body.occupation)){
        return res.status(400).send({
            message: 'occupation is required'
        })
    }
    if(validator.isEmpty(req.body.expertise)){
        return res.status(400).send({
            message: 'expertise is required'
        })
    }
    // if(!(req.body.firstName===String)){
    //     return res.status(400).send({
    //         message:"firstName must be string"
    //     })
    // }
    // if(!(req.body.lastName===String)){
    //     return res.status(400).send({
    //         message:"lastName must be string"
    //     })
    // }
    // if(!(req.body.address===String)){
    //     return res.status(400).send({
    //         message:"address must be string"
    //     })
    // }
    // if(!(req.body.bio===String)){
    //     return res.status(400).send({
    //         message:"Biography must be string"
    //     })
    // }
    // if(!(req.body.occupation===String)){
    //     return res.status(400).send({
    //         message:"occupation must be string"
    //     })
    // }
    // if(!(req.body.expertise===String)){
    //     return res.status(400).send({
    //         message:"expertise must be string"
    //     })
    
    next();
}
export default usersValidation;