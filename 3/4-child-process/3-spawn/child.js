

process.title = "Child - Node"

console.log("pid", process.pid);
console.log("ppid", process.ppid);



const intevalId = setInterval(() => {
    console.log("Now:", Date.now());
}, 1e3);



setTimeout(() => {
    // throw new Error("My Error")
    // clearInterval(intevalId)
    // process.exit()
}, 5e3);