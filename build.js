// console.log('Terminal size: ' +  + 'x' + process.stdout.rows);

import boxen from "boxen";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";


const options = {
  padding: 1,
  margin: {
    top:0,
    bottom:0,
    left: 4
  },
  borderStyle: 'doubleSingle'
}

const optionsfig = {
  padding: 1,
  margin: {
    top:0,
    bottom:0,
    left: 4
  },
  borderStyle: {
    topLeft: ' ',
    topRight: ' ',
    bottomLeft: ' ',
    bottomRight: ' ',
    horizontal: ' ',
    vertical: ' '
}
}

let fig = figlet.textSync('ktorvi!', {
  font: 'Alligator',
  horizontalLayout: 'default',
  verticalLayout: 'default'
});

// fig = `${chalkAnimation.rainbow(fig)}`;

chalkAnimation.rainbow('fig')

console.log(boxen((gradient('cyan', 'pink')(fig)), optionsfig))

let data = {
  lastName: ['lastName', 'Philippe'],
  firstName: ['firstName', 'Victor'],
  pseudonym: ['pseudonym', 'ktorvi', ],
  age: ['age', '26y/o'],

  location: ['\nlocation', 'Brussels, Belgium'],

  occupation: ['\noccupation', 'Junior Developer'],
  partOfa: ['      @19', 'Learner'],
  partOfb: ['      @ktorvi.me', 'Fooling around, Techie dude'],

  website: ['website', 'https:/ktorvi.me'],
  github: ['\ngithub', 'https://github.com/ktor-vi'],
  instagram: ['IG', 'ktor.vi'],
  linkedIn: ['linkedIn', 'https://www.linkedin.com/in/ktor-vi/'],
  npx: ['card', 'npx ktor-vi']
}






let unite = '';
let totalChars = process.stdout.columns - 20;
let leftHsl = 215;
let rightHsl = 160;
let dataSize = Object.keys(data).length;
let step = (leftHsl - rightHsl) / dataSize;

for (const [key, value] of Object.entries(data)) {
  leftHsl -= step;
  rightHsl += step; {
    // let thisLine = `${chalk.hsl(leftHsl,100,50)(value[0])}:${separateByColouredPeriods(value[0],value[1],totalChars,3, 30, 100)}:${chalk.hsl(rightHsl,100,50)(value[1])}\n`;
    let thisLine = `${chalk.hsl(leftHsl,100,50)(value[0])}:${separateByGradientPeriods(value[0],value[1],totalChars,3, 30, 100)}:${chalk.hsl(rightHsl,100,50)(value[1])}\n`;

    unite += `${thisLine}`;
  }

}



console.log(chalk.hsl(0, 0, 70)(boxen(unite, options)))

function separateByGradientPeriods(lStr, rStr, totalChars, margin, hStart, hStop) {
  let periods = "";
  let periodLength = totalChars - lStr.length - rStr.length - margin;
  let step = (hStart - hStop) / periodLength;
  for (let i = 0; i < periodLength; i++) {
    periods += `${chalk.hsl(hStart,100,50)('.')}`;
    hStart += step;
  }

  return periods;
}
