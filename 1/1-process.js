// @ts-check

// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// console.log(process.env);
// console.log(process.pid);
// console.log(process.ppid);
// console.log(process.cwd());
// console.log(process.title);
// console.log(process.argv);
// node index.js behzad  =>  console.log(`Hello ${process.argv[2]}`); => Hello behzad
// console.log(process.uptime());
// console.log(process.memoryUsage());
// console.log(process.hrtime());
// console.log(process.chdir("./newDir"));
// console.log(process.kill(process.pid));


// ======================================================================================

// setInterval(() => { console.log("test") }, 1e1);

// ["SIGHUP", "SIGINT", "SIGQUIT", "SIGILL", "SIGABRT", "SIGFPE", "SIGKILL", "SIGTERM", "SIGSEGV", "SIGBREAK", "SIGWINCH", "exit"].forEach((signal) => {
//     process.on(signal, () => console.log(signal));
// })

// process.exit()
// process.kill(process.pid)



// console.log(process.binding('constants').os.signals);


// ======================================================================================
// setInterval(() => {
//     console.log(Date.now());
// }, 1e3)

// setTimeout(() => {
//     process.exit()
// }, 5e3);

// process.on("uncaughtException", () => {
//     console.log("uncaughtException");

// })

// throw new Error("123")


// ======================================================================================

// import wt from "node:worker_threads"

// if (wt.isMainThread) {
//     console.log("main", process.pid, process.ppid)
//     for (let i = 0; i < 3; i++) {
//         const worker = new wt.Worker("./index.js");
//         await new Promise(r => {
//             worker.once("online", () => r(null))
//         })
//         worker.once("error", (err) => console.log(err))
//     }
// } else {
//     console.log("worker " + wt.threadId, process.pid, process.ppid)
//     // setInterval(() => void null, 1e3)
//     let i = 0;
//     while (1) {
//         i = Math.random()
//     }
// }
// ======================================================================================
