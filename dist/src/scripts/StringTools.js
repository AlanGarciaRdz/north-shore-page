"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumberToPrice = exports.numberPriceFormatter = exports.formatToURL = exports.formatToPhoneNumber = exports.isNumeric = exports.IsValidPhoneNumber = exports.IsValidEmail = exports.IsEmptyString = void 0;
//Validate if is an empty string
const IsEmptyString = (text) => {
    if (text === undefined || text == null) {
        return true;
    }
    const textCheck = text.toString();
    if (textCheck === undefined ||
        textCheck == null ||
        textCheck.trim().length === 0) {
        return true;
    }
    return false;
};
exports.IsEmptyString = IsEmptyString;
//Validate if is a valid email
const IsValidEmail = (email) => {
    if (email === undefined || email == null) {
        return false;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
exports.IsValidEmail = IsValidEmail;
//Validate if is a valid phone number
const IsValidPhoneNumber = (number) => {
    if (number === undefined || number == null) {
        return false;
    }
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(number);
};
exports.IsValidPhoneNumber = IsValidPhoneNumber;
//Validate if is a valid numeric value
const isNumeric = (str) => {
    if (typeof str !== 'string')
        return false; // we only process strings!
    return (!isNaN(parseInt(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))); // ...and ensure strings of whitespace fail
};
exports.isNumeric = isNumeric;
//Format a string to a valid phone number
const formatToPhoneNumber = (phoneNumberString) => {
    if (phoneNumberString === undefined) {
        return '';
    }
    if (phoneNumberString.length === 1 && !(0, exports.isNumeric)(phoneNumberString)) {
        return '';
    }
    const input = phoneNumberString.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
    if (input.length > 6) {
        phoneNumberString = `(${areaCode}) ${middle} - ${last}`;
    }
    else if (input.length > 3) {
        phoneNumberString = `(${areaCode}) ${middle}`;
    }
    else if (input.length > 0) {
        phoneNumberString = `(${areaCode}`;
    }
    return phoneNumberString;
};
exports.formatToPhoneNumber = formatToPhoneNumber;
//Format URL
const formatToURL = (urlCheck) => {
    let returnURL = urlCheck;
    returnURL = returnURL
        .toLowerCase()
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z 0-9\-]/g, '');
    return returnURL;
};
exports.formatToURL = formatToURL;
exports.numberPriceFormatter = new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
});
//Format a Number to Price
const formatNumberToPrice = (number) => {
    return exports.numberPriceFormatter.format(number).toString().replace('$', '');
};
exports.formatNumberToPrice = formatNumberToPrice;
