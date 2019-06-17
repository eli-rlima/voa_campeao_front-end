import { compose, filter, join, map, toPairs } from "ramda";

import { TIME_OUT } from "constants/properties";
import axios from "axios";
import includes from "lodash/includes";

/**
 * Validate HTTP OK status.
 *
 * @param {Number} status - Status
 * @return {Boolean} True if HTTP status is 2xx
 */
const validateStatus = (status) => status.toString().indexOf("2") === 0;

/**
 * HTTP Methods enumerator.
 */
const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE"
};

export class HttpClient {
  constructor(baseURL, internalError) {
    this.baseURL = baseURL;
    this.internalError = internalError;
    this.instance = axios.create({
      baseURL,
      timeout: TIME_OUT,
      validateStatus
    });

    this.interceptInstance();
  }

  /**
   * Intercept current axios instance with error handler.
   */
  interceptInstance() {
    this.instance.interceptors.response.use(undefined, (error) => {
      const errorString = error.toString();

      if (includes(errorString, "timeout") && error.config) {
        const { method, url } = error.config;
        const message = `${error.message} At: ${method} ${url}`;

        const errorWithEndpoint = Object.assign(error.constructor(), error);
        errorWithEndpoint.message = message;

        return Promise.reject(errorWithEndpoint);
      }

      return Promise.reject(error);
    });
  }

  /**
   * Base method to execute a HTTP request.
   *
   * @param {String} method - HTTP method
   * @param {String} relativeURL - Server relative URL
   * @param {Object} data - Request data (body)
   * @param {Object} config - Axios configuration
   * @param {Function} success - Success handler function
   * @param {Function} error - Error handler function
   * @return {Promise<Function>} Promise resolved or rejected with respective handler function
   */
  baseRequest(method, relativeURL, data, config, success, error) {
    const { instance, internalError } = this;

    switch (method) {
      case HTTP_METHOD.GET:
        return instance
          .get(relativeURL, config)
          .then(success, error)
          .catch(internalError);
      case HTTP_METHOD.POST:
        return instance
          .post(relativeURL, data, config)
          .then(success, error)
          .catch(internalError);
      case HTTP_METHOD.PUT:
        return instance
          .put(relativeURL, data, config)
          .then(success, error)
          .catch(internalError);
      case HTTP_METHOD.PATCH:
        return instance
          .patch(relativeURL, data, config)
          .then(success, error)
          .catch(internalError);
      case HTTP_METHOD.DELETE:
        return instance
          .delete(relativeURL, config)
          .then(success, error)
          .catch(internalError);
      default:
        return null;
    }
  }

  /**
   * Execute HTTP GET request to Server.
   *
   * @param {String} url - Server relative URL
   * @param {Object} config - Axios configuration
   * @param {Function} success - Success handler function
   * @param {Function} error - Error handler function
   * @return {Promise<Function>} Promise resolved or rejected with respective handler function
   */
  get(url, config, success, error) {
    return this.baseRequest(HTTP_METHOD.GET, url, null, config, success, error);
  }

  /**
   * Execute HTTP POST request to Server.
   *
   * @param {String} url - Server relative URL
   * @param {Object} data - Request data (body)
   * @param {Object} config - Axios configuration
   * @param {Function} success - Success handler function
   * @param {Function} error - Error handler function
   * @return {Promise<Function>} Promise resolved or rejected with respective handler function
   */
  post(url, data, config, success, error) {
    return this.baseRequest(
      HTTP_METHOD.POST,
      url,
      data,
      config,
      success,
      error
    );
  }

  /**
   * Execute HTTP POST request to Server.
   *
   * @todo: Generify this guy, it's a fkin' monster!
   * @param {String} url - Server relative URL
   * @param {Object} data - Request data (body)
   * @param {Object} config - Axios configuration
   * @param {Function} success - Success handler function
   * @param {Function} doneFunc - Done handler function
   * @return {Promise<Function>} Promise resolved or rejected with respective handler function
   */
  postMultiple(url, data, config, success, doneFunc) {
    return axios
      .all(
        data.map((e) =>
          this.baseRequest(HTTP_METHOD.POST, url, e, config, null, (error) => ({
            error
          }))
        )
      )
      .then(doneFunc);
  }

  /**
   * Execute HTTP PUT request to Server.
   *
   * @param {String} url - Server relative URL
   * @param {Object} data - Request data (body)
   * @param {Object} config - Axios configuration
   * @param {Function} success - Success handler function
   * @param {Function} error - Error handler function
   * @return {Promise<Function>} Promise resolved or rejected with respective handler function
   */
  put(url, data, config, success, error) {
    return this.baseRequest(HTTP_METHOD.PUT, url, data, config, success, error);
  }

  /**
   * Execute HTTP PATCH request to Server.
   *
   * @param {String} url - Server relative URL
   * @param {Object} data - Request data (body)
   * @param {Object} config - Axios configuration
   * @param {Function} success - Success handler function
   * @param {Function} error - Error handler function
   * @return {Promise<Function>} Promise resolved or rejected with respective handler function
   */
  patch(url, data, config, success, error) {
    return this.baseRequest(
      HTTP_METHOD.PATCH,
      url,
      data,
      config,
      success,
      error
    );
  }
  /**
   * Execute HTTP DELETE request to Server.
   *
   * @param {String} url - Server relative URL
   * @param {Object} config - Axios configuration
   * @param {Function} success - Success handler function
   * @param {Function} error - Error handler function
   * @return {Promise<Function>} Promise resolved or rejected with respective handler function
   */
  delete(url, config, success, error) {
    return this.baseRequest(
      HTTP_METHOD.DELETE,
      url,
      null,
      config,
      success,
      error
    );
  }
}

/**
 * Builds a query string from an object
 *
 * @param {Object} params - Query params
 * @param {String} The encoded query string
 */
export const buildQueryString = compose(
  (queryString) => (queryString ? `?${queryString}` : ""),
  join("&"),
  map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  ),
  toPairs,
  filter((param) => param != null)
);
