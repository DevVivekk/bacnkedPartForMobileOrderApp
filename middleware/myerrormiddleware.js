const errorMiddleware = (err,req,res,next)=>{
    err.message || "Internal server error";
    err.statusCode || 500;
    err.success || false
    res.status(err.statusCode).json({message:err.message,success:err.success});
}
module.exports =  errorMiddleware;