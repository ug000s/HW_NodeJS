import fs from 'node:fs';
import readline from 'node:readline';

function roundToPrecision(value, precision = 4) {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

const rl = readline.createInterface({
  input: fs.createReadStream('files/train.csv'),
  crlfDelay: Infinity
});

let count = 0;
let isHeader = true;
let totalFares = 0;
let firstClassFares = 0;
let secondClassFares = 0;
let thirdClassFares = 0;
let firstClassCount = 0;
let secondClassCount = 0;
let thirdClassCount = 0;
let survivedCount = 0;
let notSurvivedCount = 0;
let survivedMaleCount = 0;
let survivedFemaleCount = 0;
let survivedKidsCount = 0;
let notSurvivedMaleCount = 0;
let notSurvivedFemaleCount = 0;
let notSurvivedKidsCount = 0;
rl.on('line', (line) => {
  // skip first line with headers
  if (isHeader) {
    isHeader = false;
    return;
  }
  count++;

  const cells = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  let isSurvived = cells[1] === '1';
  let pClass = cells[2];
  let sex = cells[4];
  let age = cells[5];

  if (isSurvived) {
    survivedCount++;
    if (age && age < 18) {
      survivedKidsCount++;
    } else if (sex === 'male') {
      survivedMaleCount++;
    } else if (sex === 'female') {
      survivedFemaleCount++;
    }
  } else {
    notSurvivedCount++;
    if (age && age < 18) {
      notSurvivedKidsCount++;
    } else if (sex === 'male') {
      notSurvivedMaleCount++;
    } else if (sex === 'female') {
      notSurvivedFemaleCount++;
    }
  }

  switch (pClass) {
    case '1':
      firstClassCount++;
      firstClassFares = roundToPrecision(firstClassFares + parseFloat(cells[9]));
      break;
    case '2':
      secondClassCount++;
      secondClassFares = roundToPrecision(secondClassFares + parseFloat(cells[9]));
      break;
    case '3':
      thirdClassCount++;
      thirdClassFares = roundToPrecision(thirdClassFares + parseFloat(cells[9]));
      break;
    default:
      break;
  }

  totalFares = roundToPrecision(totalFares + parseFloat(cells[9]));

  // if (cells.length !== 12) {
  //   console.error(`Line from file: ${line}`);
  //   console.error(`Cells: ${cells.length}`);
  //   throw new Error('!!!Invalid cells count!!!');
  // }
});

rl.on('close', () => {
  console.log('---');
  console.log(`Total fares: ${totalFares}`);

  console.log('---');
  console.log(`Average fare for First class: ${roundToPrecision(firstClassFares / firstClassCount)}`);
  console.log(`Average fare for Second class: ${roundToPrecision(secondClassFares / secondClassCount)}`);
  console.log(`Average fare for Third class: ${roundToPrecision(thirdClassFares / thirdClassCount)}`);

  console.log('---');
  console.log(`Survived count: ${survivedCount}`);
  console.log(`Not survived count: ${notSurvivedCount}`);

  console.log('---');
  console.log(`Survived male count: ${survivedMaleCount}`);
  console.log(`Survived female count: ${survivedFemaleCount}`);
  console.log(`Survived kids count: ${survivedKidsCount}`);

  console.log('---');
  console.log(`Not survived male count: ${notSurvivedMaleCount}`);
  console.log(`Not survived female count: ${notSurvivedFemaleCount}`);
  console.log(`Not survived kids count: ${notSurvivedKidsCount}`);

  console.log('---');
});


