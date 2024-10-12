const fs = require('fs-extra');
const appRoot = require('app-root-path');

function copyFile(fileName) {
    fs.copySync(appRoot.path + "/hosts_template.json" , appRoot.path + "/" + fileName)
}

module.exports = copyFile;
