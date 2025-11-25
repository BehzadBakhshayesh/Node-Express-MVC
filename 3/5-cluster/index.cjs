const http = require('http');
const cluster = require('cluster');
const os = require('os');

function makeServer() {
    http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
        res.end(`${process.pid}`)
    }).listen("3000", () => {
        console.log("server running on port: 3000 ", " process id:", process.pid);
    })
}

const cpuCount = os.cpus().length

if (cluster.isPrimary) {

    process.title = "parent Node"

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else {

    //Workers can share any tcp connection
    process.title = "Child Node" + process.pid
    makeServer()

}



