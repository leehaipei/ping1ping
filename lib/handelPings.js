const pingHost = require("../util/ping");
const ProgressBar = require("progress");
const chalk = require("chalk");
const moment = require("moment");

async function handelPings(hosts, cfg) {
  const bar = new ProgressBar("ping [:bar] :percent", {
    total: hosts.length * 10,
  });
  return new Promise(async (resolve, reject) => {
    let results = [];
    for (let host of hosts) {
      const pingResult = await pingHost(host.host, cfg);
      results.push({
        ...pingResult,
        hostName: host.name,
        pingTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
      for (let i = 0; i < 10; i++) {
        bar.tick();
      }
    }
    console.log(chalk.bgGreen(`OK!`));
    resolve(results);
  });
}

module.exports = handelPings;
