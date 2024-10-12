const ping = require("ping");

function pingHost(host, cfg) {
    return new Promise(async (resolve, reject) => {
        const result = await ping.promise.probe(host, cfg);
        resolve(result)
    })
}

module.exports = pingHost;
