const puppeteer = require("puppeteer");
const fs = require("fs");

const sleep = require(`${__dirname}/utils`);

const count = parseInt(process.argv[2], 10) || 10;

const writeToFile = data => {
  fs.writeFile("./data.json", JSON.stringify(data), err => {
    if (err) {
      return console.error(err);
    }
    process.exit();
  });
};

async () => {
  const data = [];
  const browser = await puppeteer.launch({ headless: false });
};
