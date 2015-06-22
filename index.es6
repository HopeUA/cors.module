/**
 * CORS middleware
 *
 * @module @hope/cors
 * @version 1.0.3
 *
 * @author Sergey Sadovoi [sergey@hope.ua]
 * @license MIT
 */

/**
 * Set the CORS headers in the response
 *
 * @param request {http.ClientRequest} HTTP Request
 * @param response {http.IncomingMessage} Server Response
 * @returns {Promise}
 */
function cors(request, response) {
    return new Promise(resolve => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
        response.header('Access-Control-Allow-Methods', 'GET,HEAD,POST,PUT,PATCH,DELETE');
        response.header('Access-Control-Max-Age', '604800');

        resolve(response);
    });
}

/**
 * Middleware factory
 * Send response on preflight request
 */
export default function middleware() {
    return (request, response, next) => {
        cors(request, response)
            .then(() => {
                if (request.method === 'OPTIONS') {
                    response.end('', 200);
                } else {
                    next();
                }
            })
            .catch(next);
    };
}
