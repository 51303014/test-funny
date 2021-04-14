"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBaseDataService = void 0;
/**
 * This class is intended to be a base class for all data services that have simple endpoints. For example the Booking service that have endpoints for:
 * - Get all, create: /booking
 * - Get one, update, delete: /booking/:bookingId
 *
 * Provides all CRUD actions.
 * If you have a more complex action, you need to implement this action on the concrete class yourself.
 */
var IBaseDataService = /** @class */ (function () {
    function IBaseDataService() {
    }
    return IBaseDataService;
}());
exports.IBaseDataService = IBaseDataService;
