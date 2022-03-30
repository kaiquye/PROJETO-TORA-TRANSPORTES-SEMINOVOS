const IsValid = require('./Formularios');
const ENUMs = require('../../enum/ENUM')

class IsVerify{
    
    constructor(ENUM, object, response){
        return this.Validade(ENUM, object)
    }
    Validade = async function(ENUM, object){
        switch(ENUM){
            case ENUMs.FORM_ANUNCIO :
                return await new IsValid().FormularioAnuncio(object.body);
        }
    }
}

module.exports = IsVerify