const { Table } = require('console-table-printer');

async function handelLogTable(data,timeConsuming) {
  return new Promise(async (resolve, reject) => {
    const p = new Table({
      title: `Total time consumption ${timeConsuming}s`,
      columns: []
    });
    p.addRows(data.map((item, index) => {
      return {
        index: index + 1,
        host: item.hostName,
        alive: item.alive ? '✔' : '✖',
        time: item.time,
        numeric_host: item.numeric_host,
        packetLoss: item.packetLoss
      }
    }));
    p.printTable();
    resolve(true);
  });
}

module.exports = handelLogTable;
