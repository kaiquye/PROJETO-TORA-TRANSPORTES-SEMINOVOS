const jwt = require('jsonwebtoken')
const secret_ =   "MIIDBTCCAe2gAwIBAgIQHsetP+i8i6VIAmjmfVGv6jANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTIyMDEzMDIzMDYxNFoXDTI3MDEzMDIzMDYxNFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALKb0HF1qmKzHL3KkJn0jGJ21AvFNN2HLZ18iyAXtePDs4Qa4HQDpj3zHyYv7VFvC/bL1RqZOahunTdJ+uvXERyqlOdhpxtLZcmF5sxQtYcx1YEM/Xob3uLZSe7sPd+lyFDgDscd19tM3ace4JuMx8eI9mQZV7JAI+lN2naR0DbsFBOpJp4CVkfnXlpRIoDKUbL1FUNjuYdPkUqvFq/8e7ndyuhk7a8wEWps/bpNiF2rSmHZ4+Sa5Noy2Op1rfhrcZQP5fV8CKzpekqmv6ThiKUtNSSncSr6QQvVXUvKFwfuz+ai5LJr+7avkm24jnnNHL1O1j+71Eb9dOFeBYiP6qECAwEAAaMhMB8wHQYDVR0OBBYEFGzVFjAbYpU/2en4ry4LMLUHJ3GjMA0GCSqGSIb3DQEBCwUAA4IBAQBU0YdNVfdByvpwsPfwNdD8m1PLeeCKmLHQnWRI5600yEHuoUvoAJd5dwe1ZU1bHHRRKWN7AktUzofP3yF61xtizhEbyPjHK1tnR+iPEviWxVvK37HtfEPzuh1Vqp08bqY15McYUtf77l2HXTpak+UWYRYJBi++2umIDKY5UMqU+LEZnvaXybLUKN3xG4iy2q1Ab8syGFaUP7J3nCtVrR7ip39BnvSTTZZNo/OC7fYXJ2X4sN1/2ZhR5EtnAgwi2RvlZl0aWPrczArUCxDBCbsKPL/Up/kID1ir1VO4LT09ryfv2nx3y6l0YvuL7ePz4nGYCWHcbMVcUrQUXquZ3XtI"

const Validate = (req, res, next)=>{

    console.log(req.headers)
    let TOKEN = req.headers.authorization
    let secret =  '-----BEGIN CERTIFICATE-----\n' + secret_ + '\n-----END CERTIFICATE-----';
    try {
        jwt.verify(TOKEN, secret);
        next()
    } catch (error) {
        console.log(error)
        return res.json(200).json({erro : true})
    }
}
module.exports = {
    Validate 
}