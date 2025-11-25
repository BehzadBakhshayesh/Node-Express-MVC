// const { fork } = require("child_process")
// const path = require("path")
// const heavyProcess = require('./heavy-process.cjs')

// setInterval(() => {
//     console.log(Date.now());
// }, 1000);

// setTimeout(() => {
//     console.log(heavyProcess())
// }, 0)

// console.log("salam", Date.now());


// ===================================================================
const { fork } = require("child_process")
const path = require("path")
process.title = "parent node"

// fork(`${__dirname}/child.js`)
// fork(`${__dirname}/child.js`)
// fork(`${__dirname}/child.js`)
// fork(`${__dirname}/child.js`)


const child = fork(`${__dirname}/child.js`)

child.on("message", (data) => {
    console.log(data);
    child.send("parent say: aleyk")
    // child.kill()
})

setInterval(() => {
    console.log(Date.now());
}, 1000);

console.log("salam", Date.now());