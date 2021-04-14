"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORM_ERRORS = exports.defaultErrors = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.defaultErrors = {
    // built-in validators
    required: function (required) { return "This field is required"; },
    number: function (number) { return "This field must be a valid number"; },
    email: function (email) { return "This field must be a valid email"; },
    minlength: function (_a) {
        var requiredLength = _a.requiredLength, actualLength = _a.actualLength;
        return "Expect minimum " + requiredLength + " character(s) but got " + actualLength;
    },
    maxlength: function (_a) {
        var requiredLength = _a.requiredLength, actualLength = _a.actualLength;
        return "Expect maximum " + requiredLength + " character(s) but got " + actualLength;
    },
    pattern: function (_a) {
        var requiredPattern = _a.requiredPattern, actualValue = _a.actualValue;
        return "Expect " + requiredPattern + " pattern but got " + actualValue;
    },
    max: function (_a) {
        var max = _a.max, actual = _a.actual;
        return "Expect maximum value is " + max + " but got " + actual;
    },
    min: function (_a) {
        var min = _a.min, actual = _a.actual;
        return "Expect minimum value is " + min + " but got " + actual;
    },
    // custom validators
    digits: function (digits) { return "This field only allow digits"; },
    arrayLength: function (_a) {
        var minLength = _a.minLength;
        return "This field only allow minimun " + minLength + " item(s)' array";
    },
    base64: function (base64) { return "This field only allow base 64 format string"; },
    creditCard: function (creditCard) { return "This field must be a valid credit card number"; },
    date: function (date) { return "This field must be a valid date"; },
    dateISO: function (dateISO) { return "This field must be a valid ISO date"; },
    equal: function (_a) {
        var value = _a.value;
        return "This field must be equal \"" + value + "\"";
    },
    notEqual: function (_a) {
        var value = _a.value;
        return "This field must be not equal \"" + value + "\"";
    },
    equalTo: function (_a) {
        var control = _a.control, value = _a.value;
        return "This field value must be equal to \"" + getFormControlName(control) + "\" field";
    },
    notEqualTo: function (_a) {
        var control = _a.control, value = _a.value;
        return "This field value must not be equal to \"" + getFormControlName(control) + "\" field";
    },
    gt: function (_a) {
        var value = _a.value;
        return "This field value must be greater than \"" + value + "\"";
    },
    gte: function (_a) {
        var value = _a.value;
        return "This field value must be greater than or equal \"" + value + "\"";
    },
    lt: function (_a) {
        var value = _a.value;
        return "This field value must be less than \"" + value + "\"";
    },
    lte: function (_a) {
        var value = _a.value;
        return "This field value must be less than or equal \"" + value + "\"";
    },
    includedIn: function (_a) {
        var value = _a.value, reason = _a.reason;
        return "This field has value \"" + value + "\", which is not included in \"" + reason + "\"";
    },
    notIncludedIn: function (_a) {
        var value = _a.value, reason = _a.reason;
        return "This field must not has a value included in \"" + reason + "\"";
    },
    json: function (json) { return "This field value is in invalid json format"; },
    notMatching: function (_a) {
        var value = _a.value, reason = _a.reason;
        return "This field value must not match \"" + reason + "\" pattern";
    },
    hasProperty: function (_a) {
        var value = _a.value;
        return "This field value not has property \"" + value + "\"";
    },
    range: function (_a) {
        var value = _a.value;
        return "This field value is not in the range \"" + value + "\"";
    },
    url: function (value) { return "This field value is an invalid url"; },
    uuid: function (value) { return "This field value is an invalid uuid"; },
    rangeLength: function (_a) {
        var value = _a.value;
        return "This field value has length is not in the range \"" + value + "\"";
    },
    maxDate: function (_a) {
        var value = _a.value, control = _a.control, error = _a.error;
        if (!control && !value && error) {
            return "" + error;
        }
        if (!control && value && !error) {
            return "This field only allow maximum date is " + value;
        }
        if (control && !value && !error) {
            return "This field has maximum date is the value of field \"" + getFormControlName(control) + "\"";
        }
        if (control && value && !error) {
            return "This field has maximum date is the value of field \"" + getFormControlName(control) + "\" (" + value + ")";
        }
    },
    minDate: function (_a) {
        var value = _a.value, control = _a.control, error = _a.error;
        if (!control && !value && error) {
            return "" + error;
        }
        if (!control && value && !error) {
            return "This field only allow minimum date is " + value;
        }
        if (control && !value && !error) {
            return "This field has minimum date is the value of field \"" + getFormControlName(control) + "\"";
        }
        if (control && value && !error) {
            return "This field has minimum date is the value of field \"" + getFormControlName(control) + "\" (" + value + ")";
        }
    },
};
exports.FORM_ERRORS = new core_1.InjectionToken('FORM_ERRORS', {
    providedIn: 'root',
    factory: function () { return exports.defaultErrors; }
});
function getFormControlName(control) {
    var controlParent = control.parent;
    if (!controlParent || !(controlParent instanceof forms_1.FormGroup)) {
        return null;
    }
    for (var _i = 0, _a = Object.keys(controlParent.controls); _i < _a.length; _i++) {
        var controlName = _a[_i];
        if (control === controlParent.controls[controlName]) {
            return controlName;
        }
    }
    return null;
}
