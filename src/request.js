import axios from 'axios';
import { apiUrl } from './utils/config';

const fetch = axios.create({
    baseURL: apiUrl,
    timeout: 20000
});


function returnResponse(response) {
    if (response.status >= 200 && response.status < 300) {
        const { statusText, status, data } = response
        return { success: true, message: statusText, status, data }
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function returnErrorResponse(error) {
    const { response } = error
    let msg
    let status
    let otherData = {}
    if (response) {
        const { data, statusText } = response
        otherData = data
        status = response.status
        msg = data.message || statusText
    } else {
        status = 600
        msg = 'Network Error'
    }
    return { success: false, status, message: msg, data: otherData }
}

export function request(url, options) {
    return fetch(url, ...options)
        .then((response) => {
            returnResponse(response)
        })
        .catch((error) = {
            returnErrorResponse(error)
        });
}