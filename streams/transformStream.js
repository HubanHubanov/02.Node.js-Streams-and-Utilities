const fs = require("fs");
const zlib = require("zlib")

const readStream = fs.createReadStream("./data/input.txt", {encoding: "utf-8", highWaterMark:100 });
const writeStream = fs.createWriteStream("./data/transformed.txt", {encoding: "utf-8"});
const gzibTransofrmStream = zlib.createGzip();
readStream.pipe(gzibTransofrmStream).pipe(writeStream);
