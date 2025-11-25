const { Worker } = require("worker_threads")
const path = require("path")

console.log("master", process.pid);

const workerPath = path.resolve(__dirname, "worker.js")

const makeWorker = (a, b) => {
    const worker = new Worker(workerPath, {
        workerData: { a, b }
    })

    // worker.postMessage("Salam")
    worker.on("message", (data) => { console.log("===========>", data) })
}

makeWorker(99999999n, 99999n)
makeWorker(9999999999n, 99999n)
makeWorker(999999n, 99999n)

//این اینتروال بدون لگ کارشو انجام میده و ورکر ها کار سنگین رو موازی انجام میدن
setInterval(() => {
    console.log(Date.now());
}, 1000);


