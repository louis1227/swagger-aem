/**
 * Adobe Experience Manager (AEM) API
 * Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API
 *
 * OpenAPI spec version: 1.2.0
 * Contact: opensource@shinesolutions.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NodeSwaggerAem) {
      root.NodeSwaggerAem = {};
    }
    root.NodeSwaggerAem.CrxApi = factory(root.NodeSwaggerAem.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Crx service.
   * @module api/CrxApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CrxApi. 
   * @alias module:api/CrxApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the postPackageService operation.
     * @callback module:api/CrxApi~postPackageServiceCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} cmd 
     * @param {module:api/CrxApi~postPackageServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postPackageService = function(cmd, callback) {
      var postBody = null;

      // verify the required parameter 'cmd' is set
      if (cmd === undefined || cmd === null) {
        throw new Error("Missing the required parameter 'cmd' when calling postPackageService");
      }


      var pathParams = {
      };
      var queryParams = {
        'cmd': cmd
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['aemAuth'];
      var contentTypes = [];
      var accepts = ['text/xml'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/crx/packmgr/service.jsp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postPackageServiceJson operation.
     * @callback module:api/CrxApi~postPackageServiceJsonCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} path 
     * @param {String} cmd 
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupName 
     * @param {String} opts.packageName 
     * @param {String} opts.packageVersion 
     * @param {String} opts.charset_ 
     * @param {Boolean} opts.force 
     * @param {Boolean} opts.recursive 
     * @param {File} opts._package 
     * @param {module:api/CrxApi~postPackageServiceJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postPackageServiceJson = function(path, cmd, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling postPackageServiceJson");
      }

      // verify the required parameter 'cmd' is set
      if (cmd === undefined || cmd === null) {
        throw new Error("Missing the required parameter 'cmd' when calling postPackageServiceJson");
      }


      var pathParams = {
        'path': path
      };
      var queryParams = {
        'cmd': cmd,
        'groupName': opts['groupName'],
        'packageName': opts['packageName'],
        'packageVersion': opts['packageVersion'],
        '_charset_': opts['charset_'],
        'force': opts['force'],
        'recursive': opts['recursive']
      };
      var headerParams = {
      };
      var formParams = {
        'package': opts['_package']
      };

      var authNames = ['aemAuth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/crx/packmgr/service/.json/{path}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postPackageUpdate operation.
     * @callback module:api/CrxApi~postPackageUpdateCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} groupName 
     * @param {String} packageName 
     * @param {String} version 
     * @param {String} path 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.charset_ 
     * @param {module:api/CrxApi~postPackageUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postPackageUpdate = function(groupName, packageName, version, path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling postPackageUpdate");
      }

      // verify the required parameter 'packageName' is set
      if (packageName === undefined || packageName === null) {
        throw new Error("Missing the required parameter 'packageName' when calling postPackageUpdate");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling postPackageUpdate");
      }

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling postPackageUpdate");
      }


      var pathParams = {
      };
      var queryParams = {
        'groupName': groupName,
        'packageName': packageName,
        'version': version,
        'path': path,
        'filter': opts['filter'],
        '_charset_': opts['charset_']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['aemAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/crx/packmgr/update.jsp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postSetPassword operation.
     * @callback module:api/CrxApi~postSetPasswordCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} old 
     * @param {String} plain 
     * @param {String} verify 
     * @param {module:api/CrxApi~postSetPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postSetPassword = function(old, plain, verify, callback) {
      var postBody = null;

      // verify the required parameter 'old' is set
      if (old === undefined || old === null) {
        throw new Error("Missing the required parameter 'old' when calling postSetPassword");
      }

      // verify the required parameter 'plain' is set
      if (plain === undefined || plain === null) {
        throw new Error("Missing the required parameter 'plain' when calling postSetPassword");
      }

      // verify the required parameter 'verify' is set
      if (verify === undefined || verify === null) {
        throw new Error("Missing the required parameter 'verify' when calling postSetPassword");
      }


      var pathParams = {
      };
      var queryParams = {
        'old': old,
        'plain': plain,
        'verify': verify
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['aemAuth'];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/crx/explorer/ui/setpassword.jsp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
