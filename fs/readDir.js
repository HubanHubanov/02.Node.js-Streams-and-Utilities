const fs = require("fs/promises");

fs.readdir(".", "utf-8")
   .then(res => console.log(res))
   .catch(err => console.log(err))

// const fs = require("fs");

// fs.readdir(".", {encoding: "utf-8"}, (err, res) => {
//     if(err) {
//         console.log("Error in reading files");
//        return            
//     }
//     console.log(res);
// })
