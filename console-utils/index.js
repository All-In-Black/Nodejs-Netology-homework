const yargs = require('yargs');

const options = yargs
.usage("Usage: -d <date> -m <month> -y <year>")
.option("d", { alias: "date", describe: "Current date", type: "string", demandOption: false })
.option("m", { alias: "month", describe: "Current month", type: "string", demandOption: false })
.option("y", { alias: "year", describe: "Current year", type: "string", demandOption: false })
.option("add", { describe: "Add days/months/years to current date", type: "boolean", demandOption: false })
.option("sub", { describe: "Subtract days/months/years from current date", type: "boolean", demandOption: false })
.option("days", { describe: "Number of days to add/subtract", type: "number", demandOption: false })
.option("months", { describe: "Number of months to add/subtract", type: "number", demandOption: false })
.option("years", { describe: "Number of years to add/subtract", type: "number", demandOption: false })
.argv;

let date = new Date();

if (options.add) {
    if (options.days) {
    date.setDate(date.getDate() + options.days);
    }
    if (options.months) {
    date.setMonth(date.getMonth() + options.months);
    }
    if (options.years) {
    date.setFullYear(date.getFullYear() + options.years);
    }
    } else if (options.sub) {
    if (options.days) {
    date.setDate(date.getDate() - options.days);
    }
    if (options.months) {
    date.setMonth(date.getMonth() - options.months);
    }
    if (options.years) {
    date.setFullYear(date.getFullYear() - options.years);
    }
    } else {
        if (options.date) {
        date.setDate(options.date);
        }
        if (options.month) {
        date.setMonth(options.month);
        }
        if (options.year) {
        date.setFullYear(options.year);
    }
}

console.log(date.toISOString());
