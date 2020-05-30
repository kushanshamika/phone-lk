const fs = require('fs');
const path = require('path');
const DATA_FILE_PATH = __dirname + '/data.json';

/**
 * Reads the data file Synchronously
 * @returns {Promise<String>}
 */
function readDataFileAsync(){
    return new Promise((resolve, reject) =>{
        fs.readFile(path.join(DATA_FILE_PATH), (err, data) =>{
            if (err) reject(err);
            resolve( new String(data) );
        })
    });
}

/**
 * Reads the data file Asynchronously
 * @returns {String}
 */
function readDataFileSync(){
    var buffer = fs.readFileSync(path.join(DATA_FILE_PATH));
    return new String(buffer);
}

exports.readDataFileAsync = readDataFileAsync;
exports.readDataFileSync = readDataFileSync;