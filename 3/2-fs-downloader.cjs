const fs = require('fs')
const path = require('path')
const http = require('https')

const linkPath = path.resolve(__dirname, "links.txt")
const data = fs.readFileSync(linkPath, "utf-8")
const files = data.split("\n")

const dir = path.resolve(__dirname, "downloads")

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}

files.forEach((file) => {
    const fileUrl = decodeURI(file.trim());
    const fileName = path.basename(fileUrl.split("?")[0]).replace(/\s/g, "");
    const filePath = path.resolve(dir, fileName);

    const fileStream = fs.createWriteStream(filePath);

    http.get(fileUrl, function (response) {
        response.pipe(fileStream);
        response.on('end', () => {
            fileStream.close();
            console.log(`${fileName} downloaded`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${fileName}: ${err.message}`);
    });
});


