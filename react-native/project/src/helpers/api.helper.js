
import BaseError from '../errors/_BaseError';
import AuthorizationError from '../errors/AuthorizationError';
import ServerError from '../errors/ServerError';

import fetch from 'react-native-fetch-polyfill';

const DEFAULT_TIMEOUT = 40 * 1000;


exports.performPostServiceCall = async function (url, body, authorizationToken) {

    let options = {
        method: 'POST',
        timeout: DEFAULT_TIMEOUT,
        headers: {
            'Content-Type': 'application/json'
        },
    };

    if (authorizationToken) {
        options.headers['Authorization'] = 'Bearer ' + authorizationToken
    }
    if (body) {
        options.body = body;
    }

    return fetch(url, options)
        .then((response) => {
            if (Math.floor(response.status / 100) == 2) {
                return response.json();
            } else if (response.status == 403) {
                throw new AuthorizationError();
            } else if (Math.floor(response.status / 100) == 5) {
                throw new ServerError('error.server.5xx');
            } else {
                throw new ServerError('error.server.any');
            }
        })
        .then((json) => {
            let status = (json.codigoRetorno) ? json : json.status;
            if (status.codigoRetorno === 1) {
                return json;
            }
            else {
                throw new ServerError(status.mensagem);
            }
        }).catch((err) => {
            if (err.message === 'Network request failed') {
                throw new ServerError('error.server.timeout');
            } else if (err.isAppError) {
                throw err;
            } else {
                throw new ServerError('error.server.any');
            }
        });
}