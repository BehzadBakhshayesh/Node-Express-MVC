const { exec } = require('child_process')


// exec('ls -l | grep .js', (error, stdout, stderr) => {
//     if (error) {
//         console.error({ stderr });
//     }
//     console.log({ stdout });
// })

// exec('dir', (error, stdout, stderr) => {
//     if (error) {
//         console.error({ stderr });
//     }
//     console.log({ stdout });
// })

exec('node -v', (error, stdout, stderr) => {
    if (error) {
        console.error({ stderr });
    }
    console.log({ stdout });
})

// exec("python3 --version", (error, stdout, stderr) => {
//     if (error) {
//         console.error({ stderr });
//     }
//     console.log({ stdout });
// })

// exec('git status', (error, stdout, stderr) => {
//     if (error) {
//         console.error({ stderr });
//     }
//     console.log({ stdout });
// })