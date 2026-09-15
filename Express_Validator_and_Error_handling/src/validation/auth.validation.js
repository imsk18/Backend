import { body ,validationResult} from "express-validator";

const validator = (req,res,next)=>{
    const errors = validationResult(req)

    if(errors.isEmpty()){
        return next()
    }
    res.status(400).json({
        errors: errors.array()
    })

}

export const registerValidation = [
    body("username").isString().withMessage("username should be string"),
    body("email").isEmail().withMessage("email should be valid email address"),
    // body("password").isLength({min:6 , max:12}).withMessage("password should be between  6 to 12 characters "),
    body("password").custom((value)=>{
        if(value < 6){
            throw new Error("password should be at least 6 characters  long");
           
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/
        if(!passwordRegex.test(value)){
            throw new Error("Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character");
            
        }
        return true
    }),

    // body("userid").isMongoId()
    validator
]