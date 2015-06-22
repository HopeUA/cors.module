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
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = middleware;
function cors(request, response) {
    return new Promise(function (resolve) {
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

function middleware() {
    return function (request, response, next) {
        cors(request, response).then(function () {
            if (request.method === 'OPTIONS') {
                response.end('', 200);
            } else {
                next();
            }
        })['catch'](next);
    };
}

module.exports = exports['default'];
