const { Router } = require("express")

class HttpServerAdapter {

    static  HttpAdpater(Router) {
        return async (req, res, next) => {
            const httpsRequest = {
                body: req.body,
                params: req.params,
                next : next
            }
            const HttpResponse = await Router(httpsRequest);
            console.log(HttpResponse)
            res.status(HttpResponse.Status).json(HttpResponse.json);
        }
    }
}

module.exports = HttpServerAdapter