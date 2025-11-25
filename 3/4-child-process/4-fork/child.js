const heavyProcess = require('./heavy-process.cjs')
process.title = "child node"

// const result = heavyProcess()

// process.send({ result })

setTimeout(() => {
    const result = heavyProcess()

    process.send({ result })
}, 0);

process.send("child say: salam")

process.on('message', (data) => {
    console.log(data);
})

// process.exit()