const Model = require('../../models/Oracle/veiculo')


class Repositories {

    static async getInfosByPlace(params){
        return await new Model().BuscarVeiculoPelaPlaca(params);
    }

}

module.exports = Repositories