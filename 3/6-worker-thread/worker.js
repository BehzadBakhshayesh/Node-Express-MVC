
const { parentPort, workerData } = require("worker_threads")

console.log("worker", process.pid);


parentPort.on("message", (data) => {
    console.log(data);
    // parentPort.postMessage("aleyk")

})

const result = (workerData.a ** workerData.b).toString().length

parentPort.postMessage({ a: workerData.a, b: workerData.b, result })