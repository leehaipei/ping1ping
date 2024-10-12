const fs = require('fs-extra');
const appRoot = require('app-root-path');

function readJsonFile(fileName) {
    const path = appRoot.path + "/" + fileName
    return fs.readJsonSync(path)
}

module.exports = readJsonFile;
