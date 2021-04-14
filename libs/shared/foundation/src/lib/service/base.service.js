"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
var http_1 = require("@angular/common/http");
var client_server_1 = require("@realworld/shared/client-server");
/**
 * This class is intended to be a base class for all http service classes.
 * Handle: headers, configs, options, urls, endpoints
 */
var BaseService = /** @class */ (function () {
    function BaseService(configSerivce) {
        var _this = this;
        this.configSerivce = configSerivce;
        this.setDefaultHeaders();
        this.configSerivce.configs$.subscribe(function (configs) {
            _this.handleConfigs(configs);
        });
    }
    Object.defineProperty(BaseService.prototype, "restURL", {
        get: function () {
            if (!this._restURL) {
                throw Error('REST URL is not set, please check the configurations');
            }
            return this._restURL;
        },
        set: function (url) {
            this._restURL = url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseService.prototype, "defaultOptions", {
        /**
         * Provide default options to make a http request
         */
        get: function () {
            return {
                headers: this.headers || {},
                observe: 'body',
                responseType: 'json',
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add new headers for a request
     * @param headers {[name: string]: string | string[]}
     */
    BaseService.prototype.setHeaders = function (headers) {
        var _this = this;
        if (!this.headers) {
            throw new Error("BaseService: property headers was used but its value was not set");
        }
        Object.keys(headers).forEach(function (name) { return _this.headers = _this.headers.set(name, headers[name]); });
    };
    /**
     * Delete a header from a request
     * @param header string
     */
    BaseService.prototype.deleteHeaders = function (header) {
        if (!this.headers) {
            throw new Error("BaseService: property headers was used but its value was not set");
        }
        this.headers = this.headers.delete(header);
    };
    /**
     * Empty the headers objects.
     * Usecase
     * Used to clear all previous headers or to create a new header with your own values
     */
    BaseService.prototype.emptyHeadersObject = function () {
        this.headers = new http_1.HttpHeaders();
    };
    /**
     * Control whether show or not show the spinner on a specific request
     * @param loading 'show' | 'not-show'
     */
    BaseService.prototype.setLoading = function (loading) {
        this.setHeaders({ loading: loading });
    };
    /**
     * Get a url for making a specific request
     * @param id string
     */
    BaseService.prototype.getURL = function (id) {
        if (id) {
            return this.restURL + '/' + this.endpoint + '/' + id;
        }
        return this.restURL + '/' + this.endpoint;
    };
    /**
     * Get a url from a custom enpoint provided for making a specific request
     * @param endpoint Endpoint
     */
    BaseService.prototype.getURLFromEndpoint = function (endpoint) {
        if (endpoint.endpoint && !endpoint.bindings) {
            return this.restURL + '/' + endpoint.endpoint;
        }
        var variableIndexes = [];
        var parsedElements = endpoint.endpoint.split('/');
        parsedElements.forEach(function (e, index) {
            if (e.startsWith(':')) {
                variableIndexes.push(index);
            }
        });
        if (variableIndexes.length !== endpoint.bindings.length) {
            throw new Error("BaseService > getURLFromEndpoint: the number of binding elements is not equal to the number of variables");
        }
        variableIndexes.forEach(function (variableIndex) { return parsedElements[variableIndex] = endpoint.bindings[variableIndex]; });
        return parsedElements.join('/');
    };
    /**
     * Create options for getAll and getAllFromEndpoint methods
     * @param req IPageRequest<T>
     * @param query IQuery
     */
    BaseService.prototype.getAllOptions = function (req, query) {
        var _a, _b;
        var params = __assign({ 
            // assign a param equal [] to remove this param from the query
            offset: ((req === null || req === void 0 ? void 0 : req.pageIndex) === null || (req === null || req === void 0 ? void 0 : req.pageIndex) === undefined) ? [] : ((req === null || req === void 0 ? void 0 : req.limit) ? (req === null || req === void 0 ? void 0 : req.pageIndex) * (req === null || req === void 0 ? void 0 : req.limit) : req === null || req === void 0 ? void 0 : req.pageIndex).toString(), limit: ((req === null || req === void 0 ? void 0 : req.limit) === null || (req === null || req === void 0 ? void 0 : req.limit) === undefined) ? [] : req === null || req === void 0 ? void 0 : req.limit.toString(), orderBy: ((req === null || req === void 0 ? void 0 : req.order) === null || (req === null || req === void 0 ? void 0 : req.order) === undefined) ? [] : (_a = req === null || req === void 0 ? void 0 : req.order) === null || _a === void 0 ? void 0 : _a.orderBy.toString(), orderType: ((req === null || req === void 0 ? void 0 : req.order) === null || (req === null || req === void 0 ? void 0 : req.order) === undefined) ? [] : (_b = req === null || req === void 0 ? void 0 : req.order) === null || _b === void 0 ? void 0 : _b.orderType.toString() }, query);
        var options = __assign(__assign({ params: new http_1.HttpParams({ fromObject: params }) }, this.defaultOptions), { observe: 'response' });
        return options;
    };
    BaseService.prototype.mapGetAllRes = function (res, pageIndex, limit) {
        var _a, _b;
        var data = {
            limit: limit,
            total: (_a = res === null || res === void 0 ? void 0 : res.body) === null || _a === void 0 ? void 0 : _a.total,
            pageIndex: pageIndex,
            data: (_b = res === null || res === void 0 ? void 0 : res.body) === null || _b === void 0 ? void 0 : _b.listData
        };
        return data;
    };
    BaseService.prototype.handleConfigs = function (configs) {
        this.restURL = configs.rest.url;
    };
    BaseService.prototype.setDefaultHeaders = function () {
        this.emptyHeadersObject();
        var headers = {};
        headers[client_server_1.HTTP_HEADER.CONTENT_TYPE] = 'application/json';
        this.setHeaders(headers);
        this.setLoading("show");
    };
    return BaseService;
}());
exports.BaseService = BaseService;
