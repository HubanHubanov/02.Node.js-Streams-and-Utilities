const fs = require("fs");

fs.writeFile("./created", "Hello world! ", {encoding: "utf-8", flag: "a"}, (err) => {
  if(err) {
    console.log("There is un error");
    return;
  }
  console.log("File is created");
});