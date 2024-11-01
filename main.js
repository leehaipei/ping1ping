const handelHostsFile = require("./lib/handelHostsFile");
const readJsonFile = require("./util/readJsonFile");
const handelPings = require("./lib/handelPings");
const handelLogTable = require("./lib/handelLogTable");
const moment = require("moment");
const handelLogXlsx = require("./lib/handelLogXlsx");

async function main() {
  const start = moment();

  await handelHostsFile();

  const hostsData = readJsonFile("hosts.json");

  const fullResult = await handelPings(hostsData.hosts, hostsData.config);

  const timeConsuming = moment.duration(moment().diff(start)).asSeconds();

  await handelLogTable(fullResult, timeConsuming);

  await handelLogXlsx(fullResult);
}

main();
