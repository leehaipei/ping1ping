const checkFile = require('../until/checkFile');
const copyFile = require('../until/copyFile');

async function handelHostsFile() {

    const FileName = 'hosts.json';

    return new Promise(async (resolve, reject) => {
        const checkResult = await checkFile(FileName);
        if (checkResult) {
            resolve(true);
        } else {
            copyFile(FileName);
            resolve(true);
        }
    })
}

module.exports = handelHostsFile;
