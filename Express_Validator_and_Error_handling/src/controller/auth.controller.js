

export async function registerUser(req,res, next){
    try{
         console.log("hello");
    throw new error("encounter new error while register user");
    }catch(err){
        next(err)

    }
   
    
}
