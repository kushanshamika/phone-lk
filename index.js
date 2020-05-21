const fs = require('fs');

function phone(number){

    let mobileOperatorCodes = fs.readFileSync("./data/mobileOperatorCodes.json");
    mobileOperatorCodes = JSON.parse(mobileOperatorCodes);


    number = number.match(/\d/g);
    number = number.join("");

    var formatNumber = null;
    if (number.substring(0, 2) === "94" && number.length && number.substring(2, 4) in mobileOperatorCodes) {
        formatNumber = number;
        console.log("ok");
    }
    return number;
}
console.log(phone("+94 77-548-948-5"));
module.exports.phone = phone;