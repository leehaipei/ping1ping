const fs = require('fs');
const appRoot = require('app-root-path');

function checkConfig(fileName) {
    return new Promise((resolve, reject) => {
        fs.access(appRoot.path + "/" + fileName, (err) => {
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })

}

module.exports = checkConfig;