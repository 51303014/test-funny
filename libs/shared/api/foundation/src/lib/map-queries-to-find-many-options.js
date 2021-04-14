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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapQueriesToFindManyOptions = void 0;
var typeorm_1 = require("typeorm");
function mapQueriesToFindManyOptions(query) {
    var _a;
    var searchColumns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        searchColumns[_i - 1] = arguments[_i];
    }
    var options = {};
    if (!query) {
        return options;
    }
    var offset = query.offset, limit = query.limit, orderBy = query.orderBy, orderType = query.orderType, search = query.search, filters = __rest(query
    // paging
    , ["offset", "limit", "orderBy", "orderType", "search"]);
    // paging
    options.skip = offset || 0;
    if (limit) {
        options.take = limit;
    }
    // ordering
    if (orderBy && orderType) {
        options.order = {};
        options.order[orderBy] = orderType.toUpperCase();
    }
    // filtering
    if (Object.keys(filters).length !== 0) {
        options.where = [__assign({}, filters)];
    }
    // searching
    if (search && (searchColumns === null || searchColumns === void 0 ? void 0 : searchColumns.length)) {
        var filters_1 = ((_a = options.where) === null || _a === void 0 ? void 0 : _a.length) ? options.where[0] : {};
        options.where = [];
        var likeSearch_1 = '%' + search + '%';
        searchColumns.forEach(function (column) {
            var condition = {};
            condition[column] = typeorm_1.Like(likeSearch_1);
            options.where.push(__assign(__assign({}, filters_1), condition));
        });
    }
    return options;
}
exports.mapQueriesToFindManyOptions = mapQueriesToFindManyOptions;
