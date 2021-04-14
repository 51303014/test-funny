"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.BaseDataService = void 0;
var operators_1 = require("rxjs/operators");
var base_service_1 = require("./base.service");
var BaseDataService = /** @class */ (function (_super) {
    __extends(BaseDataService, _super);
    function BaseDataService(configuration, http) {
        var _this = _super.call(this, configuration) || this;
        _this.http = http;
        return _this;
    }
    BaseDataService.prototype.getOne = function (id, loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURL(id);
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.get(url, options);
    };
    BaseDataService.prototype.getAll = function (req, query, loading) {
        var _this = this;
        if (loading === void 0) { loading = true; }
        var url = this.getURL();
        this.setLoading(loading ? 'show' : 'not-show');
        var options = this.getAllOptions(req, query);
        return this.http.get(url, options).pipe(operators_1.map(function (res) { return _this.mapGetAllRes(res, req === null || req === void 0 ? void 0 : req.pageIndex, req === null || req === void 0 ? void 0 : req.limit); }));
    };
    BaseDataService.prototype.create = function (body, loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURL();
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.post(url, body, options);
    };
    BaseDataService.prototype.update = function (id, body, loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURL(id);
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.put(url, body, options);
    };
    BaseDataService.prototype.delete = function (id, loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURL(id);
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.delete(url, options);
    };
    return BaseDataService;
}(base_service_1.BaseService));
exports.BaseDataService = BaseDataService;
