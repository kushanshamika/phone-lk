const fs = require('fs');

function phone(number){

    let mobileOperatorCodes = fs.readFileSync("./data/mobileOperatorCodes.json");
    mobileOperatorCodes = JSON.parse(mobileOperatorCodes);

    let landlineOperatorCodes = fs.readFileSync("./data/landlineOperatorCodes.json");
    landlineOperatorCodes = JSON.parse(landlineOperatorCodes);

    let areaCodes = fs.readFileSync('./data/areaCodes.json');
    areaCodes = JSON.parse(areaCodes);


    number = number.match(/\d/g);
    try{
        number = number.join("");
    }catch{
        return [];
    }

    var formatedNumber = null;

    if (number.substring(0, 2) === "94" && number.length == 11 && (number.substring(2, 4) in mobileOperatorCodes ||( number.substring(2, 4) in areaCodes && number.charAt(4) in landlineOperatorCodes))) {
        
        formatedNumber = number;
    
    }else if (number.length == 10 && number.charAt(0) === "0" && (number.substring(1, 3) in mobileOperatorCodes ||( number.substring(1, 3) in areaCodes && number.charAt(3) in landlineOperatorCodes))) {

        formatedNumber = "94".concat(number.substring(1,10));
        
    }else if (number.length == 9 && (number.substring(0, 2) in mobileOperatorCodes ||( number.substring(0, 2) in areaCodes && number.charAt(2) in landlineOperatorCodes))) {
        
        formatedNumber = "94".concat(number);

    }

    var operator = null;
    var area = null;
    var category = null;

    if (formatedNumber != null) {
        
        if (formatedNumber.substring(2,4) in mobileOperatorCodes) {
            
            operator = mobileOperatorCodes[formatedNumber.substring(2,4)];
            category = "mobile";

        }else if (formatedNumber.substring(2,4) in areaCodes) {
            
            operator = landlineOperatorCodes[formatedNumber.charAt(4)];
            category = "landline";
            area = areaCodes[formatedNumber.substring(2,4)];
            
        }else{

            return [];
        }
    }
    return [formatedNumber, category, operator, area];
}

module.exports.phone = phone;