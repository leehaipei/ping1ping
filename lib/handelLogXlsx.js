const XLSX = require("xlsx");
const fs = require("fs");
const appRoot = require("app-root-path");
const chalk = require("chalk");

async function handelLogXlsx(data) {
  return new Promise(async (resolve, reject) => {
    const fileAbsolutePath = appRoot.path + "/record.xlsx";
    fs.access(fileAbsolutePath, (err) => {
      if (err) {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([
          [
            "hostName",
            "inputHost",
            "host",
            "pingTime",
            "alive",
            "output",
            "time",
            "times",
            "min",
            "max",
            "avg",
            "stddev",
            "packetLoss",
            "numeric_host",
          ],
        ]);
        XLSX.utils.book_append_sheet(workbook, worksheet, "record");
        XLSX.writeFile(workbook, fileAbsolutePath);
        console.log(
          `${chalk.bgGreen(
            "Record that Excel has been created!"
          )} ${chalk.bgGreen(fileAbsolutePath.replace(/\\/g, "/"))}`
        );
      }

      const workbook = XLSX.readFile(fileAbsolutePath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      let newRowData = [];

      data.forEach((item) => {
        newRowData.push([
          item.hostName,
          item.inputHost,
          item.host,
          item.pingTime,
          item.alive,
          item.output,
          item.time,
          item.times,
          item.min,
          item.max,
          item.avg,
          item.stddev,
          item.packetLoss,
          item.numeric_host,
        ]);
      });

      let lastRowIndex = 2;
      while (worksheet[`A${lastRowIndex}`]) {
        lastRowIndex++;
      }

      const newRow = XLSX.utils.sheet_add_aoa(worksheet, newRowData, {
        origin: -1,
      });

      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, newRow, workbook.SheetNames[0]);
      XLSX.writeFile(newWorkbook, fileAbsolutePath);
      console.log(
        `${chalk.bgGreen("Excel has been recorded!")} ${chalk.bgGreen(
          fileAbsolutePath.replace(/\\/g, "/")
        )}`
      );
    });
    resolve(true);
  });
}

module.exports = handelLogXlsx;
