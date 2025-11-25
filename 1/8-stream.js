import Stream from 'stream';
// ==========================================================
const readableStream = new Stream.Readable()
// تعریف رفتار خواندن (Readable)
readableStream._read = (size) => {
    console.log({ size }); // وقتی مصرف‌کننده‌ای داده بخواد این متد صدا زده میشه
}



const writableStream = new Stream.Writable()
// تعریف رفتار نوشتن (Writable)
writableStream._write = (chunk, encoding, next) => {
    console.log({ chunk });     // داده‌ای که اومده
    console.log({ encoding });  // انکودینگ (معمولاً 'buffer' یا 'utf8')
    next(); // اعلام کن آماده‌ام برای chunk بعدی
}

// ==========================================================


// اتصال Readable به Writable
readableStream.pipe(writableStream)

let counter;
const intervalId = setInterval(() => {
    readableStream.push(String(counter++)) // هر ثانیه یک مقدار جدید وارد استریم کن
}, 1e3);

// ==========================================================

readableStream.on("close", () => { writableStream.end() })
writableStream.on("close", () => { console.log("stream ended"); })

setTimeout(() => {
    readableStream.destroy()
    clearInterval(intervalId)
}, 8e3);