const checkFile = require('../util/checkFile');
const copyFile = require('../util/copyFile');

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
