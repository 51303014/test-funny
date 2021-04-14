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
exports.PaginatedDataSource = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// https://medium.com/angular-in-depth/angular-material-pagination-datasource-73080d3457fe
var PaginatedDataSource = /** @class */ (function () {
    function PaginatedDataSource(request, initialOrder, initialQuery, initialPageIndex, limit, endpoint) {
        var _this = this;
        this.currentPageIndex = 0;
        this.pageIndex = new rxjs_1.Subject();
        this.query = new rxjs_1.BehaviorSubject(initialQuery);
        this.order = new rxjs_1.BehaviorSubject(initialOrder);
        var param$ = rxjs_1.combineLatest([this.query, this.order]);
        this.page$ = param$.pipe(operators_1.switchMap(function (_a) {
            var query = _a[0], order = _a[1];
            return _this.pageIndex.pipe(operators_1.startWith(initialPageIndex), operators_1.switchMap(function (pageIndex) {
                _this.currentPageIndex = pageIndex;
                if (endpoint) {
                    return request({ pageIndex: pageIndex, order: order, limit: limit }, query, endpoint);
                }
                return request({ pageIndex: pageIndex, order: order, limit: limit }, query);
            }));
        }), operators_1.share());
    }
    PaginatedDataSource.prototype.orderBy = function (order) {
        var lastOrder = this.order.getValue();
        var nextOrder = __assign(__assign({}, lastOrder), order);
        this.order.next(nextOrder);
    };
    PaginatedDataSource.prototype.queryBy = function (query) {
        var lastQuery = this.query.getValue();
        var nextQuery = __assign(__assign({}, lastQuery), query);
        this.query.next(nextQuery);
    };
    PaginatedDataSource.prototype.fetch = function (pageIndex) {
        if (pageIndex === undefined || pageIndex === null) {
            pageIndex = this.currentPageIndex;
        }
        this.pageIndex.next(pageIndex);
    };
    PaginatedDataSource.prototype.connect = function () {
        return this.page$.pipe(operators_1.map(function (page) { return page.data; }));
    };
    PaginatedDataSource.prototype.disconnect = function () { };
    return PaginatedDataSource;
}());
exports.PaginatedDataSource = PaginatedDataSource;
