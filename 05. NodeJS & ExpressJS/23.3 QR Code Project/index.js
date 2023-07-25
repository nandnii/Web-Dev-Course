/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([{
    message: "Type your URL",
    name: "URL"
  }])
  
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('Nandni_Github.png'));

    fs.writeFile('Github_URL.txt', url, err => {
        if (err) throw err;
        console.error("File saved!");
      });
  });



