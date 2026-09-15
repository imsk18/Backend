

export async function registerUser(req,res, next){
//   throw new Error("encounter new error while register");

// const err= new Error("password is too weak")
// err.status=404
// next(err)

try{
   throw new Error("password is too weak");

   
}catch(err){
   err.status = 400
   next(err)
}
  
   
    
}
