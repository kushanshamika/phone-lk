# phone-lk &middot; ![npm](https://img.shields.io/npm/v/phone-lk) ![Node.js CI](https://github.com/kushanshamika/phone-lk/workflows/Node.js%20CI/badge.svg) [![codecov](https://codecov.io/gh/kushanshamika/phone-lk/branch/master/graph/badge.svg)](https://codecov.io/gh/kushanshamika/phone-lk) [![CodeFactor](https://www.codefactor.io/repository/github/kushanshamika/phone-lk/badge)](https://www.codefactor.io/repository/github/kushanshamika/phone-lk)

With a given phone number, validate and reformat the mobile phone number to the 94XXXXXXXXX and reveal information about phone numbers such as device category(mobile/landline), Service provider information, and landline geolocation. The purpose of this is to allow us to identify mobile numbers and format number to 94XXXXXXXXX that requires most local SMS gateway providers in Sri Lanka.  🇱🇰

## Install
```
npm install phone-lk
```

or

```
yarn add phone-lk
```

##  Basic usage

```js
const {phone} = require('phone-lk');

phone("0775489485");        // -> [ '94775489485', 'mobile', 'dialog', null ]
phone("912225492");         // -> [ '94912225492', 'landline', 'sri lanka telecom', 'galle' ]
phone("0792225492");        // -> return [] as it is not valid Sri Lanka phone number
```

## License

This project is licensed under the [MIT license](https://github.com/kushanshamika/phone-lk/blob/master/LICENSE).