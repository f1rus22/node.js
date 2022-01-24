const fs = require('fs')
const readline = require('readline')

const log1 = process.argv[2];
const log2 = process.argv[3];


const readStream = fs.createReadStream('./access.log', 'utf8')
const writeStream1 = fs.createWriteStream(`./${log1}_requests.log`)
const writeStream2 = fs.createWriteStream(`./${log2}_requests.log`)

let countrStr = 0;

const rl = readline.createInterface({
    input: readStream,
    terminal: true
});

rl.on('line', (line) => {
    if (line.includes(`${log1}`)) {
       writeStream1.write(line + "\n")
    }

    if (line.includes(`${log2}`)) {
        writeStream2.write(line + "\n")
    }

    console.log(++countrStr)
})


//"89.123.1.41"
//"34.48.240.111"