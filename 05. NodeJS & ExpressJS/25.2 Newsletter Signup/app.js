import express, {urlencoded} from 'express';
import https from 'https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import mailchimp from "@mailchimp/mailchimp_marketing";
import 'dotenv/config';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname)); 

app.get("/", function(req, res){
    res.sendFile(`${__dirname}/signup.html`);
});

console.log(process.env.MAILCHIMP_API_KEY);
mailchimp.setConfig({
     apiKey: process.env.MAILCHIMP_API_KEY,
     server: "us14"
});
    

app.post("/", function (req,res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const listId = "0561c98bd0";
    
    //Creating an object with the users data
    const subscribingUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    
    //Uploading the data to the server
    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
        
        //If all goes well logging the contact's id
        res.sendFile(`${__dirname}/success.html`);
        console.log("Successfully added contact as an audience member.");
    }
    
    
    //Running the function and catching the errors (if any)
    // ************************THIS IS THE CODE THAT NEEDS TO BE ADDED FOR THE NEXT LECTURE*************************
    // So the catch statement is executed when there is an error so if anything goes wrong the code in the catch code is executed. In the catch block we're sending back the failure page. This means if anything goes wrong send the faliure page
    run().catch(e => {
        res.sendFile(`${__dirname}/failure.html`);
    }) 

    
});

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000")
});

// app.use("/public", express.static(__dirname+"/public")) // THIS ALSO WORKS

// If you have specified the css file path in your signup HTML file as 
// <link href="/public/css/styles.css" rel="stylesheet"> 
// you only need app.use(express.static(__dirname)) 
// as __dirname returns the path of the folder where you app.js file resides.

// If you want to use app.use(express.static(__dirname + "/public")) 
// then you have to change your css file path to 
// <link href="/css/styles.css" rel="stylesheet">