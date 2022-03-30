const Check = require('yup')

class ChecksForm{

    async FormularioAnuncio(params){
        console.log(params)
       let AndValid = Check.object().shape({
             PROPRIETARIO_VEI : Check.string('Erro : O nome do proprietario deve ser em formato String')
            .required('Erro : Nome do proprietario e obrigatorio.')
            .min(0, 'Erro : Nome do proprietario muito curto.'),

            TELEFONE_VEI : Check.string('Erro : Numero de telefone não esta no formato certo.')
            .required('Erro : Numero de telefone obrigatorio')
            .max(11, 'Erro : Numero de telefone muito grande.')
            .min(0, 'Erro : Numero de telefone muito curto.'), 

            PLACA_VEI : Check.string('Erro : Placa invalida')
            .max(7, 'Erro : Placa muito grande')
            .min(0, 'Erro : Placa muito curta'),

            CHASSI_VEI :Check.string('Erro : Chassi invalido')
            .max(38, 'Erro : Chassi muito grande')
            .min(0, 'Erro : Chassi muito curta'),

            ANO_VEI :Check.string('Erro : Ano invalido')
            .required('Erro : Data não pode ser null')
            .max(4, 'Ano muito longo')
            .min(2, 'Ano muito curto'),

            COR_VEI :Check.string('Erro : Cor invalida')
            .required('Erro : Cor não pode ser null')
            .max(17, 'Erro : Cor muito grande')
            .min(0, 'Erro : Cor muito curta'),

            MODELO_VEI :Check.string('Erro : Modelo invalido')
            .required('Erro : Modelo não pode ser null')
            .max(35, 'Erro : Modelo muito grande')
            .min(0, 'Erro : Modelo muito curto'),

            CRV_VEI :Check.string('Erro : CRV invalida')
            .max(37, 'Erro : CRV muito grande')
            .min(0, 'Erro : CRV muito curta'),

            RENAVAM_VEI :Check.string('Erro : Renavam invalido')
            .max(22, 'Erro : Renavam muito grande')
            .min(0, 'Erro : Renavam muito curto'),

            OBS_VEI :Check.string('Erro : Obs invalida')
            .max(40, 'Erro : Obs muito grande')
            .min(0, 'Erro : Obs muito curta'),

            STATUS_VEI :Check.number('Erro : STATUS invalida')
            .max(1, 'Erro : STATUS muito grande')
            .min(0, 'Erro : STATUS muito curta')
            .positive('Numero invalido'),

            PRECO_VEI : Check.string('Erro : Preco invalido')
            .required('Erro : Preco não pode ser null')
            .min(1, 'Erro : Preco muito curta'),

            POTENCIA_VEI :Check.string('Erro : Potencia invalido')
            .max(3, 'Erro : Potencia muito longa. Max 3 digito')
            .min(0, 'Erro : Potencia muito curta'),

            TORQUE_VEI :Check.string('Erro : Torque invalido')
            .max(4, 'Torque muito longo')
            .min(0, 'Torque muito curto'),

            KM_VEI :Check.string('Erro : Km invalida')
            .max(18, 'Erro : Km muito grande')
            .min(0, 'Erro : Km muito curta'),

            CABINE_VEI :Check.string('Erro : Cabine invalido')
            .max(30, 'Erro : Cabine muito grande')
            .min(0, 'Erro : Cabine muito curto'),

            REL_DIFERENCIAL_VEI :Check.string('Erro : Diferencial invalida')
            .max(10, 'Erro : Diferencial muito grande')
            .min(0, 'Erro : Diferencial muito curta'),

            TIP_SUSPENSAO_VEI :Check.string('Erro : Suspensao invalido')
            .max(10, 'Erro : Suspensao muito grande')
            .min(0, 'Erro : Suspensao muito curto'),

            ENT_EIXO_VEI :Check.string('Erro : Entre eixos invalido')
            .max(40, 'Erro : Entre eixos muito grande')
            .min(0, 'Erro : Entre eixos muito curta'),

            CAP_COMBUSTIVEL_VEI :Check.string('Erro : Capacidade de combustivel invalida')
            .max(4, 'Erro : Capacidade de combustivel muito grande')
            .min(0, 'Erro : Capacidade de combustivel muito curta'),

            OPC_VEI :Check.string('Erro : Opcional invalida')
            .max(190, 'Erro : Capacidade de combustivel muito grande')
            .min(0, 'Erro : Capacidade de combustivel muito curta'),
            
            INF_VEI :Check.string('Erro : Informacoes invalida')
            .max(541, 'Erro : Informacoes muito grande')
            .min(0, 'Erro : Informacoes muito curta')
        })
        try {
             await AndValid.validate(params)
             return {
                 ok : false
             }
        } catch (error) {
            let ERROR = error.errors
            return {
                ok : true,
                Status: 200,
                json: {
                    erro : true, mensagem : ERROR[0]
                }
            }
        }
    }
}

module.exports = ChecksForm