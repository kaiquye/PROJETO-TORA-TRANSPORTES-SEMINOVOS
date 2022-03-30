const multer = require('multer')
class UploadImage {
    constructor(){
        this.Upload();
    }
   Upload(){
      return multer({
            storage : multer.diskStorage({
                destination :  function(req, file, cb){
                    cb(null, 'src/AnnounceCase/Resizeimg-Announce/image-Announce')
                },
                filename : function(req, file, cb){
                    cb(null, Date.now().toString() + '_'+ file.originalname)
                }, 
            }),
       })
   }
}

module.exports = new UploadImage().Upload()