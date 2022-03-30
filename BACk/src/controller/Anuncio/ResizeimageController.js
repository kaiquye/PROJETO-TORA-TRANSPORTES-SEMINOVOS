const SHARP = require('sharp')
const fs = require('fs')
class RESIZEIMG {

   async Execute(request, response, next){
       console.log(request.body)
        console.log(request.body.Telefone)
        const images = new Array()
        if(request.files.length < 1){
            return next()
        }
        let lengthFilesImage = request.files.length;
        request.files.forEach( async image => {
            const convertImage = await SHARP(fs.readFileSync(__dirname + '/IMAGEM_VEI/' + image.filename)).resize(500).webp().toBuffer()
            images.push(convertImage)
            if(images.length >= lengthFilesImage){
                request.body.IMAGEMS_VEI = images;
                next()
            }
        });
    }
}
module.exports = RESIZEIMG