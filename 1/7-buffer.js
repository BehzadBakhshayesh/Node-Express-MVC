

// const buf = Buffer.alloc(10)
// console.log(buf);   => <Buffer 00 00 00 00 00 00 00 00 00 00>

// ====================================================


// const buf = Buffer.alloc(10, "abc")
// console.log(buf);  ====> <Buffer 61 62 63 61 62 63 61 62 63 61>
// console.log(buf[3]);  ====ASCII CODE====> 97
// for (const b of buf) {
//     console.log(b);

// }

// ====================================================

// const buf = Buffer.from("abc")
// console.log(buf);   ======><Buffer 61 62 63>
// console.log(buf.toString());   ====== utf-8 ===> "abc"
// console.log(buf.toString("base64"));   ====== base64 ===> "YWJj"


// ====================================================

// const buf = Buffer.from("abc")
// console.log(buf.length); ==========> 3
// buf.forEach((b, i, buf) => console.log(b, i, buf)
// )

// ====================================================

// const buf = Buffer.from("abc")

// const base64String = buf.toString('base64')


// text ====> ورودی
// from ====> جنس ورودی
// to   ====> جنس خروجی
// function convert(text, from, to) {
//     return Buffer.from(text, from).toString(to)
// }
// console.log(convert("abc", 'utf8', 'base64'));
// console.log(convert(convert("abc", 'utf8', 'base64'), 'base64', 'utf8'));

