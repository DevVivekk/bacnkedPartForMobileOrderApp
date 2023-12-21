class ErrorHandler extends Error{
    constructor(message,statusCode,success){
        super(message);
        this.statusCode =  statusCode ||  500 ;
        this.message =  message || 'Internal Server Error Found'
        this.success = success || false
    }
}
module.exports = ErrorHandler;