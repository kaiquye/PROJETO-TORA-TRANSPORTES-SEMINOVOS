
//erros que não são esperados, não quero que aconteça
class MiddlewareErro{
    erro(erro, request, response, next){

        //Model : Minhas func retorna uma exeção throw.
        //Model : Quando a func retorna o Erro Ex : return new Error(), 
        //ele não cai neste mldd e a aplicação continua rodando
        console.log('middleware erro ', erro)
        return response.status(500).json({erro : true, messsagem : erro.message })
    }
}
module.exports = new MiddlewareErro().erro