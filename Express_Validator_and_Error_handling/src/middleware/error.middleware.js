import dotenv from "dotenv"  /** import me dotenv all file me import karna hota hai */
dotenv.config()
async function handleError(err,req,res,next){
    // res.status(err.status).json({
    //     message:err.message,

   // })

   const response = {
        message:err.message
    }
    if(process.env.NODE_ENVIRONMENT == "development"){
        response.stack = err.stack

    }
    res.status(err.status).json(response)

}

export default handleError