



// const colors = {
//     reset: "\x1b[0m",
//     bright: "\x1b[1m",
//     dim: "\x1b[2m",
//     red: "\x1b[31m",
//     green: "\x1b[32m",
//     yellow: "\x1b[33m",
//     blue: "\x1b[34m",
//     magenta: "\x1b[35m",
//     cyan: "\x1b[36m",
//     white: "\x1b[37m",
// };

// function log(message, color = "white") {
//     const colorCode = colors[color] || colors.white;
//     process.stdout.write(`${colorCode}${message}${colors.reset}\n`);
// }

// log('salam', "cyan")

function log(data) {
    process.stdout.write(data)
    process.stdout.write("\n")
}
log('11111')



// node 2-stdout.js | node .\3-stdin.js
// node 2-stdout.js > a.txt