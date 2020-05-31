const {readDataFileSync, readDataFileAsync} = require('./util');

/**
 * Synchronous function to get phone number details
 * @param {String} number - unformatted phone number
 * @param {boolean} [isObjectFormat] - whether to return as an object instead of an array
 * @returns {String}
 */
function phone(number, isObjectFormat = false){
    var data = readDataFileSync();
    return getPhoneNumberDetails( data, number, isObjectFormat );
}

/**
 * Asynchronous function to get phone number details
 * @param {String} number - unformatted phone number
 * @param {boolean} [isObjectFormat] - whether to return as an object instead of an array
 * @returns {Promise<String>}
 */
function phoneAsync(number, isObjectFormat = false){
    return new Promise((resolve, reject) => {
        readDataFileAsync()
        .then(data => {
            resolve( getPhoneNumberDetails(data, number, isObjectFormat) );
        })
        .catch(err =>{
            reject(err);
        })
    });
}

/**
 * Finds details about phone number comparing to data
 * @param {String} data - stored data
 * @param {String} number - phone number
 * @param {boolean} isObjectFormat
 * @returns {Object}
 */
function getPhoneNumberDetails(data, number, isObjectFormat){
    var ret = { isValid: false };

    if( !number ){
        return send(ret, isObjectFormat);
    }
    
    // data splitting
    var dataJSON = JSON.parse(data);
    var areaCodes = dataJSON.areaCodes;
    var landlineOperatorCodes = dataJSON.landlineOperatorCodes;
    var mobileOperatorCodes = dataJSON.mobileOperatorCodes;

    // sanitize and reformat
    var sanitizedPhoneNumber = sanitizePhoneNumber(number);
    var reformattedNumber = reformatPhoneNumber(sanitizedPhoneNumber);

    // validate
    var isValid = isValidPhoneNumber(dataJSON, reformattedNumber);
    if( isValid ){

        ret.isValid = true;

        // data
        var operator = null;
        var area = null;
        var category = null;

        // find details
        var firstTwoDigits = reformattedNumber.substr(2, 2);
        if( firstTwoDigits in mobileOperatorCodes ){
            operator = mobileOperatorCodes[firstTwoDigits];
            category = 'mobile';
        }else if( firstTwoDigits in areaCodes ){
            operator = landlineOperatorCodes[reformattedNumber.charAt(4)];
            category = 'landline';
            area = areaCodes[firstTwoDigits];
        }

        // set data
        ret.formattedNumber = reformattedNumber;
        ret.operator = operator;
        ret.area = area;
        ret.category = category;

    }
    return send(ret, isObjectFormat);
}

/**
 * Sends the response accordingly
 * @param {Object} dataObject 
 * @param {boolean} isObjectFormat 
 */
function send(dataObject, isObjectFormat){
    if( isObjectFormat ){
        return dataObject;
    }
    return convertToArray(dataObject);
}

/**
 * Converts phone number details object to an array
 * @param {Object} dataObject 
 * @returns {Array}
 */
function convertToArray(dataObject){
    if( dataObject.isValid ){
        return [dataObject.formattedNumber, dataObject.category, dataObject.operator, dataObject.area];
    }
    return [];
}

/**
 * Removes all non-digit characters from the given number
 * @param {String} number 
 */
function sanitizePhoneNumber(number){
    var digits = number.match(/\d/g);

    // remove '0' in the beginning
    if( Array.isArray(digits) && digits.length > 0 && digits[0] === '0' ){
        digits.splice(0, 1);
    }
    var sanitizedPhoneNumber = digits.join("");
    return sanitizedPhoneNumber;
}

/**
 * Reformats the phone number to 94xxxxxxxx format
 * @param {String} number - phone number
 * @returns {String}
 */
function reformatPhoneNumber(number){    
    if( number.length === 9 ){
        return ('94' + number);
    }

    return number;
}

/**
 * Checks whether the number is in 94xxxxxxxxx
 * @param {Object} dataJSON
 * @param {String} number 
 * @returns {String}
 */
function isValidPhoneNumber(dataJSON, number){

    var regexFormat = buildRegexpression(dataJSON.areaCodes, dataJSON.landlineOperatorCodes, dataJSON.mobileOperatorCodes);
    var regex = new RegExp(regexFormat);

    return regex.test(number);
}

/**
 * Dynamically build regex to validate phone number
 * @param {Object} areaCodes 
 * @param {Object} landlineOperatorCodes 
 * @param {Object} mobileOperatorCodes 
 */
function buildRegexpression(areaCodes, landlineOperatorCodes, mobileOperatorCodes){

    var areaCodesGroup = Object.keys(areaCodes).join('|');
    var landlineOperatorGroup = Object.keys(landlineOperatorCodes).join('|');
    var mobileOperatorGroup = Object.keys(mobileOperatorCodes).join('|');

    var format = `^(94)?(?:(${areaCodesGroup})(${landlineOperatorGroup})|(${mobileOperatorGroup})\\d)\\d{6}$`;
    return format;
}

exports.phone = phone;
exports.phoneAsync = phoneAsync;