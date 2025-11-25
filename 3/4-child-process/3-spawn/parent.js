const { spawn } = require('child_process')
const path = require('path')

process.title = "Parent - Node"
console.log("Parent pid", process.pid);



const child = spawn('node', [path.resolve(__dirname, "child.js")])

child.stdout.on("data", (data) => { console.log(data.toString()) })
child.stderr.on("data", (data) => { console.log(data.toString()) })

child.on("close", (code) => { console.log("child process close with code:", code) })

setTimeout(() => {
    console.log("Parent Timeout");
}, 1e10);




// =====================================AbortController

// const { spawn } = require('child_process')
// const path = require('path')

// process.title = "Parent - Node"
// console.log("Parent pid", process.pid);


// const controller = new AbortController()

// const child = spawn('node', [path.resolve(__dirname, "child.js")], { signal: controller.signal })

// child.stdout.on("data", (data) => { console.log(data.toString()) })

// child.on("close", (code) => { console.log("child process close with code:", code) })

// setTimeout(() => {
//     controller.abort()
// }, 5000);

