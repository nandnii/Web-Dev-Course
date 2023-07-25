const fs = require('fs');

// fs.writeFile("/Users/nandnisrivastava/Nandni/WebDev/23.1 Using Node/messages.txt", "Hello from node.js", err => {
//         if (err) throw err;
//         console.log("Success");
// });

fs.readFile("./messages.txt", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });