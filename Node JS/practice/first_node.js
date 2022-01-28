const f = require("fs");
let text = f.readFileSync("hello.txt","utf-8");
console.log(text);
text = text.replace("hello","Yellow");
console.log("\n\n\n\n\n");
console.log(text);