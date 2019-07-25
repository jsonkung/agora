import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

const config = {
    url: BASE_URL
}

class Request {
    /**
     * Request object to make API calls
     * @param {String} endpoint API endpoint to call
     * @param {Object} parameters Request parameters for axios call
     */
    constructor(parameters) {
        config.method = parameters.method;
        config.url += parameters.endpoint;
        config.data = parameters.data;
        config.params = parameters.params;

        if (config.method === "POST") {
            config.headers = {
                "content-type": "application/json"
            }
        }

        axios(config).then(response => {
            this.then(response);
        }).catch(error => {
            this.catch(error);
        });
    }

    /**
     * Catch error for API call and handle with callback
     * @param {Function} callback Handler for API error
     */
    catch(callback) {
        this.catch = callback;
    }

    /**
     * Handle response from API call
     * @param {Function} callback Handler for API response
     */
    then(callback) {
        this.then = callback;
    }
}

export default Request;