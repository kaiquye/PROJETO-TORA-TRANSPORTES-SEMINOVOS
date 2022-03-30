module.exports = {
    ERRO : function(status, params){
        const error = new Error()
        error.name = status
        error.message = params 
        throw error
    }
}